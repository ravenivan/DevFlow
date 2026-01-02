import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const rightSidebarQuestions = [
    {
      _id: '1',
      title:
        'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
    },
    {
      _id: '2',
      title: 'Async/Await Function Not Handling Errors Properly',
    },
    {
      _id: '3',
      title: 'How do I use express as a custom server in NextJS?',
    },
    {
      _id: '4',
      title: 'Cascading Deletes in SQLAlchemy',
    },
    {
      _id: '5',
      title: 'Redux Toolkit Not Updating State as Expected',
    },
  ];

  const popularTags = [
    { _id: 1, name: 'javascript', totalQuestions: 5 },
    { _id: 2, name: 'react', totalQuestions: 5 },
    { _id: 3, name: 'next', totalQuestions: 5 },
    { _id: 4, name: 'vue', totalQuestions: 2 },
    { _id: 5, name: 'redux', totalQuestions: 10 },
  ]

  return (
    <section className="background-light-900_dark-200 light-border custom-scrollbar sticky top-0 right-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark-200_light-900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {rightSidebarQuestions.map((item) => (
            <div
              key={item._id}
              className="hover:bg-light-200_dark-700 mt-4 flex items-center justify-between gap-2 rounded-lg"
            >
              <Link
                href={`/questions/${item._id}`}
                key={item._id}
                className="flex w-full cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark-500_light-700">{item.title}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16"></div>
      <h3 className="h3-bold text-dark-200_light-900">Popular Tags</h3>
      <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((tag) => (
            <RenderTag 
              key={tag._id} 
              _id={tag._id} 
              name={tag.name} 
              totalQuestions={tag.totalQuestions} 
              showCount
            />
          ))}
      </div>
    </section>
  );
};

export default RightSidebar;
