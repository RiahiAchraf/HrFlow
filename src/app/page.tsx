'use client';

import dayjs from 'dayjs';
import process from 'process';
import { isEmpty } from 'ramda';
import { useEffect, useMemo, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Skeleton from 'react-loading-skeleton';

import { useGetJobs } from '@/api/jobs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Pagination,
} from '@/components/ui';
import { ContentCard, ContentLoading, EmptyState, Filters, TitleLoading } from '@/components/views';
import { useCurrentFilters } from '@/stores/useCurrentFilters';
import type { TUser } from '@/types/user';

type ServerFilters = {
  page: number;
  limit: number;
};

export default function Home() {
  const currentFilters = useCurrentFilters((state) => state.currentFilters);

  const [serverFilter, setServerFilter] = useState<ServerFilters>({
    page: 1,
    limit: 10,
  });

  // API REQUEST FOR RETRIEVING LIST JOBS
  const { data, isLoading, isFetching, refetch } = useGetJobs({
    ...serverFilter,
    board_keys: JSON.stringify([BOARD_KEY]),
  });

  // Memoize the value of listJobs and ensure that it only changes when the dependencies actually change
  const listJobs = useMemo(() => data?.data?.jobs ?? [], [data]);

  const [filteredList, setFilteredList] = useState<TUser[]>(listJobs);

  // Drag and drop function
  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(filteredList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredList(items);
  }

  // Refetch whenever the server filter changes
  useEffect(() => {
    refetch();
  }, [serverFilter, refetch]);

  // Update the filtered list based on the list jobs
  useEffect(() => {
    setFilteredList(listJobs);
  }, [listJobs]);

  // Update the filtered list based on the client filters
  useEffect(() => {
    let updatedList = [...listJobs];

    // Search for the keyword in the name of the job
    if (currentFilters?.search) {
      updatedList = updatedList.filter((item) =>
        item.name.toLowerCase().includes(currentFilters?.search?.toLowerCase()),
      );
    }

    // Apply category filter if category is selected
    if (currentFilters?.category) {
      updatedList = updatedList?.filter((item) =>
        item.tags.some((tag: any) =>
          tag.value.toLowerCase().includes(currentFilters?.category?.toLowerCase()),
        ),
      );
    }

    // Sort by name if the sorting criteria is 'name'
    if (currentFilters?.sort_by === 'name') {
      updatedList?.sort((a, b) => a?.name?.localeCompare(b.name));
    }

    // Apply sorting if the sorting criteria is 'date'
    if (currentFilters?.sort_by === 'date') {
      updatedList?.sort(
        (a, b) => new Date(a?.created_at).getTime() - new Date(b?.created_at).getTime(),
      );
    }

    // Sort by category if the sorting criteria is 'category'
    if (currentFilters?.sort_by === 'category') {
      updatedList?.sort(
        (a, b) =>
          a?.tags
            ?.find((tag: any) => tag.name === 'category')
            ?.value.localeCompare(b?.tags?.find((tag: any) => tag.name === 'category')?.value),
      );
    }

    // Update the filtered list
    setFilteredList(updatedList);
  }, [currentFilters, listJobs]);

  return (
    <div className='flex min-h-full flex-col space-y-12'>
      {isLoading ? (
        <TitleLoading />
      ) : (
        <h2 className='text-base font-semibold capitalize leading-6 text-zinc-z8'>
          {data?.message}
        </h2>
      )}
      <Filters isLoading={isLoading} />
      {isLoading ? (
        <ContentLoading />
      ) : (
        <div>
          {isEmpty(listJobs) ? (
            <EmptyState />
          ) : (
            <>
              <div className='!relative h-full '>
                {isFetching && (
                  <div className=' absolute left-0 top-0 z-10 h-full w-full rounded-xl opacity-50'>
                    <Skeleton className=' pointer-events-none h-full w-full' />
                  </div>
                )}
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId='characters'>
                    {(provided) => (
                      <ul
                        className='flex flex-col gap-5'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {filteredList?.map((item, index) => {
                          const itemData = item?.created_at;
                          const formattedDate = dayjs(itemData).format('ddd, MMM D, YYYY');

                          return (
                            <Draggable
                              key={item?.id?.toString()}
                              draggableId={item?.id?.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  className='rounded-xl bg-white p-8 shadow'
                                  key={item?.id}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Accordion type='single' collapsible>
                                    <AccordionItem value='item-1'>
                                      <div>
                                        <AccordionTrigger>
                                          <div className='flex flex-col items-start'>
                                            <div>{item?.name}</div>
                                            <div className='text-sm text-zinc-z5'>
                                              {formattedDate}
                                            </div>
                                          </div>
                                        </AccordionTrigger>
                                      </div>
                                      <AccordionContent>
                                        <ContentCard item={item} />
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
              <Pagination
                filter={serverFilter}
                setServerFilter={setServerFilter}
                metaData={data?.meta}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

const BOARD_KEY = process.env.NEXT_PUBLIC_BOARD_KEY;
