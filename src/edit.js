import { useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './style.css';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, hoverText } = attributes;

    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url });
    };

    return (
        <div {...useBlockProps({ className: 'ihb-container' })}>
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <Button onClick={open} variant="primary">
                            {imageUrl ? 'Change Image' : 'Upload Image'}
                        </Button>
                    )}
                />
            </MediaUploadCheck>

            {imageUrl && (
                <div className="hover-wrapper">
                    <img src={imageUrl} alt="Hover Preview" />
                    <div className="hover-text-preview">
                        <RichText
                            tagName="span"
                            value={hoverText}
                            onChange={(value) => setAttributes({ hoverText: value })}
                            placeholder="Enter hover text"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
