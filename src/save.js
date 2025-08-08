import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { imageUrl, hoverText } = attributes;

    return (
        <div {...useBlockProps.save({ className: 'ihb-container' })}>
            <div className="hover-wrapper">
                <img src={imageUrl} alt="Image" />
                <div className="hover-text-preview">
                    <RichText.Content tagName="span" value={hoverText} />
                </div>
            </div>
        </div>
    );
}
