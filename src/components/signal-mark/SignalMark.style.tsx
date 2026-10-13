import styled from '@emotion/native';

import { theme } from '@/theme';

export const Mark = styled.View({ width: 27, height: 30, alignItems: 'center', justifyContent: 'center' });
export const Diamond = styled.View({ width: 17, height: 17, borderWidth: 1, borderColor: theme.colors.signal, transform: [{ rotate: '45deg' }] });
export const Line = styled.View({ position: 'absolute', width: 1, height: 30, backgroundColor: theme.colors.signal, opacity: 0.55 });
export const Dot = styled.View<{ $position: 'top' | 'bottom' }>(({ $position }) => ({ position: 'absolute', [$position]: 0, width: 3, height: 3, borderRadius: 2, backgroundColor: theme.colors.signal }));
