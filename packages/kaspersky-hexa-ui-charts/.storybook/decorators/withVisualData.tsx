import React, { FC } from 'react'

export const withVisualData = (Story: FC, context: any) => {
  const visual = context.parameters.visual;

  return (
    <div
      data-visual-root
      data-visual-delay-ms={visual?.delayMs ?? 0}
    >
      <Story {...context} />
    </div>
  );
};