import React from 'react';

export default function Project({
  title,
  deployedLink,
  githubLink,
  imagePath,
  altText,
  description,
}) {
  return (
    <>
      <img src={imagePath} className="vw-100" alt={altText} />
      <a href={deployedLink}>
        <h3 className="text-center">{title}</h3>
      </a>
      <a href={githubLink}>
        <h4 className="text-center">GitHub Source</h4>
      </a>
      <p className="text-center">{description}</p>
    </>
  );
}
