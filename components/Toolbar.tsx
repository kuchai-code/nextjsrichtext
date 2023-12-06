"use client"

import { type Editor } from '@tiptap/react'
import {
    Bold, 
    Italic, 
    Heading, 
    Heading2, 
    Strikethrough,
    List, 
    ListOrdered
} from 'lucide-react'
import { Toggle } from './ui/toggle'

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props){
    if(!editor){
        return null
    }

    return (
        <div className="border border-input bg-transparent rounded-">
        <Toggle
            size="sm"
            pressed={editor.isActive("heading")}
            onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 2 }.run())
            }
        >
            <Heading2 className="h-4 w-4" /> 
        </Toggle>
        <Toggle 
            size ="sm"
            pressed={editor.isActive("bold")}
            onPressedChange={() => editor.chain().focus().toggleBold.run()}
            >
        </Toggle>
        
        <Toggle 
            size ="sm"
            pressed={editor.isActive("italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic.run()}
            >
        </Toggle>
        
        <Toggle 
            size ="sm"
            pressed={editor.isActive("strike")}
            onPressedChange={() => editor.chain().focus().toggleStrike.run()}
            >
        </Toggle> 

        <Toggle 
            size ="sm"
            pressed={editor.isActive("bulletList")}
            onPressedChange={() => editor.chain().focus().toggleBulletList.run()}
            >
        </Toggle>
        
        <Toggle 
            size ="sm"
            pressed={editor.isActive("orderedList")}
            onPressedChange={() => editor.chain().focus().toggleOrderedList.run()}
            >
        </Toggle>

        </div>
    )
}