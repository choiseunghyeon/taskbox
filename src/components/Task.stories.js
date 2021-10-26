import Task from "./Task";

const getGreetingForlocale = locale => {
  switch (locale) {
    case "kr":
      return "안녕하세요";
    case "fr":
      return "Bonjour";
    default:
      return "Hello";
  }
};

export const StoryoWithLocale = (Story, context) => {
  const greeting = getGreetingForlocale(context.globals.locale);
  return (
    <>
      {greeting}
      <Story />
    </>
  );
};

export default {
  component: Task,
  title: "Task",
  decorators: [StoryoWithLocale],
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
