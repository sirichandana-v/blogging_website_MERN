import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import './CreatePost.css'
import 'draft-js/dist/Draft.css';
import {Editor, EditorState, RichUtils, AtomicBlockUtils} from 'draft-js';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Button from '@mui/material/IconButton';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


export const CreatePost = () => {

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
  const [selectedImage, setSelectedImage] = useState(null);

  const editor=useRef();

  // const insertImage = (editorState, base64) => {
  //   var contentState = editorState.getCurrentContent();
  //   const contentStateWithEntity = contentState.createEntity(
  //     'image',
  //     'IMMUTABLE',
  //     { src: base64 },
  //   );
  //   const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  //   const newEditorState = EditorState.set(
  //     editorState,
  //     { currentContent: contentStateWithEntity },
  //   );
  //   return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
  // };

  
 
  
  let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += 'RichEditor-hidePlaceholder';
      }
    }
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
        setEditorState(newState);
        return 'handled';
    }
    return 'not-handled';
  } 

  // const _onTab=(e)=>{
  //   const maxDepth = 4;
  //   RichUtils.onTab(e, editorState, maxDepth);
  // }

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  }
  const _onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  }
  // const _onAlignJustifyClick = () => {
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, ""))
  // }
  // const _onAlignLeftClick = (e) => {
  //   e.preventDefault()
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, "ALIGN_LEFT"))
  // }
  // const _onAlignRightClick = (e) => {
  //   e.preventDefault()
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, "ALIGN_RIGHT"))
  // }
  // const _onColorTextClick = () => {
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  // }
  // const _onColorFillClick = () => {
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  // }
  const _onBulletClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "unordered-list-item"))
    
  }
  const _onStrikeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"))
  }
  const _onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"))
  }
  // const _onInsertPhotoClick = () => {
  //   const base64 = 'aValidBase64String';
  //   const newEditorState = insertImage(editorState, base64);
  //   setEditorState({ editorState: newEditorState });
  // }
  const _onInsertLinkClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  }
  const _onInsertEmotionClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  }
  const _onInsertUndoClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  }
  const _onInsertRedoClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  }

 


  return (
    <div className='createpost'>
    <div className="createpost__header">
      {/* <div className="createpost__options">
        <Button>
          <FormatAlignJustifyIcon/>
        </Button>
        <Button onMouseDown={_onAlignLeftClick}>
          <FormatAlignLeftIcon/>
        </Button>
        <Button onMouseDown={_onAlignRightClick}>
          <FormatAlignRightIcon/>
        </Button>
      </div> */}

      <div className="createpost__options">
        <Button onClick={_onBoldClick}>
        <FormatBoldIcon/>
        </Button>
        <Button onClick={_onItalicClick}>
        <FormatItalicIcon/>
        </Button>
      </div>

      {/* <div className="createpost__options">
        <Button>
          <FormatColorTextIcon/>
        </Button>
        <Button>
        <FormatColorFillIcon/>
        </Button>
      </div> */}

      <div className="createpost__options">
        <Button onClick={_onBulletClick}>
        <FormatListBulletedIcon/>
        </Button>
        <Button onClick={_onStrikeClick}>
        <FormatStrikethroughIcon/>
        </Button>
        <Button onClick={_onUnderlineClick}>
        <FormatUnderlinedIcon />
        </Button>
      </div>

      <div className="createpost__options">
        <Button>
        <InsertPhotoIcon/>
        </Button>
        <Button>
        <InsertLinkIcon/>
        </Button>
      
        
      </div>

      <div className="createpost__options">
        <Button>
          <UndoIcon/>
        </Button>
        <Button>
          <RedoIcon/>
        </Button>
      </div>
    </div>
    <div className='createpost__body'>
      
      <Editor placeholder='Start typing...' editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} ref={editor}/>
      
    </div>
    </div>
  )
}






































// import React from 'react'
// import "./createpost.css"


// export const createpost = () => {
  

//   // const [selectedText, setSelectedText]=useState('');

//   const handleEnter=(e)=>{
//     if (e.keyCode == 13) {
//       const form = e.target.form;
//       const index = [...form].indexOf(e.target);
//       form.elements[index + 1].focus();
//       e.preventDefault();   
//   }
//   }
//   const handleOnClickBold=()=>{
//     let clsContent=document.getElementsByClassName('createpost__content');
//     let start=clsContent.selectionStart;
//     let end=clsContent.selectionEnd;

//     var newSpanStart = "<span class='text'>";
//     var newSpanEnd="</span>";



//     // changeToBold(start, end);
//   }






//   return (

//     <form>
//       <textarea className='createpost__title' name="title" value={title} placeholder='Title' rows={1} onKeyDown={handleEnter} onChange={e=>setTitle(e.target.value)}></textarea>
//       <textarea className='createpost__content' name="content" value={content} placeholder='Start typing....' onChange={e=>setContent(e.target.value)}></textarea>
//     </form>
      
//     </div>
//   )
// }
