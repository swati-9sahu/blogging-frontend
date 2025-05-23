import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({ content, setContent }) => (
  <CKEditor
    editor={ClassicEditor}
    data={content}
    onChange={(event, editor) => setContent(editor.getData())}
  />
);

export default Editor;
