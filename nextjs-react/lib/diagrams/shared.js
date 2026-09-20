/**
 * Shared helpers for authoring ArchDiagram specs.
 * Keeps the diagram data files short and consistent.
 */

export function N(icon, title, desc) {
  return desc ? { icon, title, desc } : { icon, title };
}

export function S(label, color, nodes) {
  return { label, color, nodes };
}
