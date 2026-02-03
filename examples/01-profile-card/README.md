# Example 01: Profile Card

## Original

![Original](./original.png)

## Analysis

| Element | Value |
|---------|-------|
| Layout | Horizontal flex |
| Image | Circle, ~64px |
| Name | Bold, dark gray (#1f2937) |
| Title | Regular, light gray (#6b7280), letter-spacing |
| Spacing | gap-4 between image and text |

## Generated Code

See `ProfileCard.tsx`

## Accuracy

| Aspect | Score | Notes |
|--------|-------|-------|
| Layout | 95% | Flex alignment correct |
| Colors | 90% | Close match |
| Typography | 85% | Letter-spacing might need tuning |
| Overall | **90%** | Good first pass |

## Iterations

### Round 1 (Initial)
- Generated basic structure
- Used Tailwind utilities
- Placeholder image

### Possible Improvements
- Fine-tune letter-spacing on title
- Match exact gray shades
- Add hover state if needed
