// function AccordionRow({ title, isOpened, onClick, children }) {
//   return (
//     <div className='mb-2'>
//       <div className={cn('flex items-center pb-4', !isOpened && 'border-b border-grey-100')}>
//         <p className='font-medium'>{title}</p>
//         <span className='ml-auto flex cursor-pointer items-center'>
//           <span onClick={onClick}>
//             {!isOpened ? (
//               <ChevronDown className='text-gray-g3 h-3 w-3' />
//             ) : (
//               <ChevronUp className='text-gray-g3 h-3 w-3' />
//             )}
//           </span>
//         </span>
//       </div>
//       {isOpened && <div className='mt-3'>{children}</div>}
//     </div>
//   );
// }
