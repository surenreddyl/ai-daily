import type { Role } from './storage';

export const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'gm', label: 'General management & ops' },
  { value: 'other', label: 'Other' },
];

/** Which lesson role example to feature for each profile role. */
export function roleExampleKey(role: Role): 'sales' | 'marketing' | 'gm' | 'general' {
  return role === 'other' ? 'general' : role;
}

export function roleLabel(role: Role): string {
  return ROLE_OPTIONS.find((r) => r.value === role)?.label ?? 'Everyone';
}

export function greeting(name: string, now: Date = new Date()): string {
  const hour = now.getHours();
  const part = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const clean = name.trim();
  return clean ? `${part}, ${clean}` : part;
}
