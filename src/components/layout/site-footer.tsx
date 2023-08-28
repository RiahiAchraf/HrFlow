export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className='border-t border-zinc-z2 '>
      <div className='mx-auto max-w-7xl px-6 py-8 '>
        <p className='text-center text-sm leading-5'>
          &copy; {date} HrFlow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
