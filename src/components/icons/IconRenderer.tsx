// IconUtils.tsx
import { IconLibraryName, ICON_LIBRARIES } from '../../types/Icon';
import React from 'react';

interface IconRendererProps {
  library: IconLibraryName;
  iconName: string;
  size?: number;
  color?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({
  library,
  iconName,
  size = 24,
  color = 'black',
}) => {
  const IconComponent = ICON_LIBRARIES[library];
  return <IconComponent name={iconName as any} size={size} color={color} />;
};
