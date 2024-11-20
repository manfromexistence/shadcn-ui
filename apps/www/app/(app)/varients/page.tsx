import { Announcement } from "@/components/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button"
import Link from "next/link";
import { Separator } from "@/registry/new-york/ui/separator"
import { VarientsNav } from "@/components/varients-nav";
import DemoComponent from "@/demo/demo-component";

const inputDir = "inputs";
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
];

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
];
const buttonDir = "buttons";
const buttonFiles = [
  "button-01",
  "button-02",
  "button-03",
  "button-04",
  "button-05",
  "button-06",
  "button-07",
  "button-08",
  "button-09",
  "button-10",
  "button-11",
  "button-12",
  "button-13",
  "button-14",
  "button-15",
  "button-16",
];

const selectDir = "selects";
const selectFiles = [
  "select-01",
  "select-02",
  "select-03",
  "select-04",
  "select-05",
  "select-06",
  "select-07",
  "select-08",
  "select-09",
  "select-10",
  "select-11",
  "select-12",
  "select-13",
  "select-14",
  "select-15",
  "select-16",
];

const checboxDir = "checkboxes";
const checboxFiles = [
  "checkbox-01",
  "checkbox-02",
  "checkbox-03",
  "checkbox-04",
  "checkbox-05",
  "checkbox-06",
  "checkbox-07",
  "checkbox-08",
  "checkbox-09",
  "checkbox-10",
  "checkbox-11",
  "checkbox-12",
  "checkbox-13",
  "checkbox-14",
  "checkbox-15",
  "checkbox-16",
];

const radioDir = "radios";
const radioFiles = [
  "radio-01",
  "radio-02",
  "radio-03",
  "radio-04",
  "radio-05",
  "radio-06",
  "radio-07",
  "radio-08",
  "radio-09",
  "radio-10",
  "radio-11",
  "radio-12",
  "radio-13",
  "radio-14",
  "radio-15",
  "radio-16",
];

const switchDir = "switches";
const switchFiles = [
  "switch-01",
  "switch-02",
  "switch-03",
  "switch-04",
  "switch-05",
  "switch-06",
  "switch-07",
  "switch-08",
  "switch-09",
  "switch-10",
  "switch-11",
  "switch-12",
  "switch-13",
  "switch-14",
  "switch-15",
  "switch-16",
];

export default function IndexPage() {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Beautiful Varients</PageHeaderHeading>
        <PageHeaderDescription>
          Explore some varients. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#varients">Browse Varients</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container pt-6">
        <section id="varients" className="scroll-mt-20">
          <div className="grid gap-4">
            <VarientsNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
            <div className="px-1">
              <div id="buttons" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {buttonFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={buttonDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/buttons">See more Button Varients</Link>
              </div>

              <Separator />

              <div id="inputs" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {inputFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      key={componentName}
                      directory={inputDir}
                      componentName={componentName}
                    />
                  );
                })}
                {textareaFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      key={componentName}
                      directory={textareaDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/inputs">See more Inputs Varients</Link>
              </div>

              <Separator />

              <div id="selects" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {selectFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={selectDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/selects">See more Select Varients</Link>
              </div>

              <Separator />

              <div id="checkboxes" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {checboxFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={checboxDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/checkboxes-radios-switches">See more Checkbox Varients</Link>
              </div>

              <Separator />

              <div id="radios" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {radioFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={radioDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/checkboxes-radios-switches">See more Radio Varients</Link>
              </div>

              <Separator />

              <div id="switches" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {switchFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={switchDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/checkboxes-radios-switches">See more Switch Varients</Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
