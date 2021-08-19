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
      <a href={deployedLink}>
        <img
          src={imagePath}
          className="w-75 border border-secondary border-5"
          alt={altText}
        />
        <h3 className="text-center">{title}</h3>
      </a>
      <a href={githubLink}>
        <h4 className="text-center">GitHub Source</h4>
      </a>
      <p className="text-center">{description}</p>
    </>
  );
}
