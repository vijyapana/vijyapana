import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextRenderer = ({ richTextDocument }) => {
  const options = {
    renderNode: {
      // Customize rendering of specific rich text elements
      'embedded-asset-block': (node) => (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title || 'Image'}
          className="w-full h-auto"
        />
      ),
      'paragraph': (node, children) => (
        <p className="text-gray-800 mb-4">{children}</p>
      ),'heading-1': (node, children) => (
    <h1 className="text-3xl font-extrabold mb-4">{children}</h1>
  ),
  'heading-2': (node, children) => (
    <h2 className="text-2xl font-bold mt-4 mb-2">{children}</h2>
  ),
  'heading-3': (node, children) => (
    <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
  ),
  'heading-4': (node, children) => (
    <h4 className="text-lg font-medium mt-4 mb-1">{children}</h4>
  ),
  'heading-5': (node, children) => (
    <h5 className="text-base font-medium mt-4 mb-1">{children}</h5>
  ),
  'heading-6': (node, children) => (
    <h6 className="text-sm font-normal mt-4 mb-1">{children}</h6>
  ),
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};

export default RichTextRenderer;
