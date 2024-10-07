"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CircleCheck, HardDrive, MessageCircle } from "lucide-react"

import Background from "@/components/background"
import Component from "@/components/component"
import LandingPage from "@/components/landing-page"
import Text from "@/components/text"
import Visulization from "@/components/visulization"
import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Textarea } from "@/registry/default/ui/textarea"
import FluidSimulation from "@/components/fluid-simulation"


export default function IndexPage() {
  const [TWO_POPOVER_MARGIN_LEFT, setTWO_POPOVER_MARGIN_LEFT] = useState(0)
  const [TWO_POPOVER_DISPLAY, setTWO_POPOVER_DISPLAY] = useState(false)
  return (
    <div>
      <FluidSimulation />
      <div className="container relative flex max-w-[1200px] flex-col gap-4 py-4 md:py-8">
        <div>
          <div className="flex flex-col gap-1 pb-4 md:w-[300px]">
            <h1 className="text-xl font-bold">Two Step Popover</h1>
            <span className="text-sm text-muted-foreground">
              This comopnents is inspired from uilabs&apos;s aweosome animated
              components
            </span>
          </div>
          <div className="flex min-h-[250px] w-full items-center justify-center rounded-md border sm:min-h-[500px] md:h-[75vh] md:min-w-[350px]">
            <Popover>
              <PopoverTrigger asChild>
                <div className="group flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    whileFocus={{ scale: 0.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <HardDrive className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </motion.div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="flex w-[250px] space-x-2 overflow-hidden border-none bg-primary-foreground p-0">
                <div
                  style={{
                    marginLeft: `-${TWO_POPOVER_MARGIN_LEFT}px`,
                  }}
                  className="min-w-full rounded-md border p-2"
                >
                  <div
                    onClick={() => {
                      setTWO_POPOVER_DISPLAY(true)
                      setTWO_POPOVER_MARGIN_LEFT(257.5)
                    }}
                    className="group flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary"
                  >
                    <div className="flex flex-1 items-center space-x-2">
                      <MessageCircle className=" h-4 w-4 fill-muted-foreground text-muted group-hover:fill-primary group-hover:text-primary-foreground" />
                      <span className="text-sm text-primary ">Add Comment</span>
                    </div>
                    <span className="flex items-center text-xs text-muted-foreground">
                      Reply Thread
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setTWO_POPOVER_DISPLAY(true)
                      setTWO_POPOVER_MARGIN_LEFT(515)
                    }}
                    className="group flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary"
                  >
                    <div className="flex flex-1 items-center space-x-2">
                      <CircleCheck className="h-4 w-4 fill-muted-foreground text-muted group-hover:fill-primary group-hover:text-primary-foreground" />
                      <span className="text-sm text-primary">
                        Approve Changes
                      </span>
                    </div>
                    <span className="flex items-center text-xs text-muted-foreground">
                      Send Review
                    </span>
                  </div>
                </div>
                <div className="min-w-full rounded-md p-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex">
                      <span className="flex-1 text-sm text-primary">
                        Approve Changes
                      </span>
                      <span className="flex items-center rounded-sm bg-muted p-1 text-xs text-muted-foreground">
                        @ajju...
                      </span>
                    </div>
                    <div className="flex flex-col space-y-1 rounded-md bg-primary-foreground p-2">
                      <span className="flex-1 text-xs text-primary">
                        Feat: New Title Added
                      </span>
                      <span className="flex-1 text-xs text-muted-foreground">
                        Sumon is a new designer.
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => {
                          setTWO_POPOVER_MARGIN_LEFT(0)
                          setTWO_POPOVER_DISPLAY(!TWO_POPOVER_DISPLAY)
                        }}
                        className="h-8 w-full"
                        variant="default"
                      >
                        Back
                      </Button>
                      <Button className="h-8 w-full" variant="outline">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="min-w-full rounded-md p-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex">
                      <span className="flex-1 text-sm text-primary">
                        Add Comment
                      </span>
                      <span className="flex items-center rounded-sm bg-muted p-1 text-xs text-muted-foreground">
                        Create Thread
                      </span>
                    </div>
                    <Textarea placeholder="Type your comment here." />
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => {
                          setTWO_POPOVER_MARGIN_LEFT(0)
                          setTWO_POPOVER_DISPLAY(!TWO_POPOVER_DISPLAY)
                        }}
                        className="h-8 w-full"
                        variant="default"
                      >
                        Back
                      </Button>
                      <Button className="h-8 w-full" variant="outline">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Component />
        <Visulization />
        <Text />
        <Background />
        <LandingPage />
      </div>
    </div>
  )
}
