              <Separator />

              <div id="dialogs" className="grid w-full grid-cols-1 gap-2 overflow-hidden pt-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {dialogFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      className="flex items-center justify-center"
                      key={componentName}
                      directory={dialogDir}
                      componentName={componentName}
                    />
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-center py-2">
                <Link className="rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/checkboxes-radios-dialogs">See more dialog Varients</Link>
              </div>