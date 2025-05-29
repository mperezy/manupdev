import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import type { ImageProps } from '@mantine/core';
import { Image } from '@mantine/core';

type Props = ImageProps & NextImageProps;

export default (props: Props) => <Image {...props} component={NextImage} />;
