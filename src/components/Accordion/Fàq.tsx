import { Accordion, AccordionItem } from "./Accordion";

export type elements = {
  title: string;
  content: string;
};

export const Fàq = () => {
  return (
    <>
      <Accordion className="max-w-lg" value={null}>
        <AccordionItem value="1" trigger="How do I get started with Risat?">
          To get started, simply visit our website, you don't need to create an
          account to use the website.
        </AccordionItem>
        <AccordionItem value="2" trigger="What tools are available on Risat?">
          Risat brings together various tools in one place to make your workflow
          seamless. We offer several tools such as TodoList, Notes, and others.
        </AccordionItem>
        <AccordionItem value="3" trigger="How does Risat works?">
          Everything you write will be saved to your local storage.
        </AccordionItem>
        <AccordionItem value="4" trigger="Is Risat free to use?">
          Risat is totaly free.{" "}
        </AccordionItem>
      </Accordion>
    </>
  );
};
