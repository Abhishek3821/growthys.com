# Company member cutouts

The seven supplied photographs were edited with the built-in imagegen tool in
`background-extraction` mode, with `transparent_background: true`. Originals
remain in `public/images/team/member-01.jpeg` through `member-07.jpeg`.
Transparent assets are `public/images/team/member-01-cutout.png` through
`member-07-cutout.png`, in the same order as the supplied attachments.

The website renders the text separately. CSS supplies the diagonal bottom-right
crop, vertical red names, and three-column desktop layout. The page keeps its
plain background without the reference's dot pattern, as previously requested.

## Prompt used for each individual photo

Use case: background-extraction. Edit target: the single supplied company member
portrait. Remove the entire background and all non-person objects (office,
walls, plants, furniture, desk, laptop, mug, chair). Output only the SAME person
as a clean photographic cutout on a genuinely transparent alpha background.
Preserve their exact face, identity, expression, hair, clothing, pose, hands and
body proportions. Do not beautify, redesign, replace clothing, invent new poses
or people. Keep the original available body framing, with head fully visible,
hair edges finely extracted and no white halo. Keep original photographic color
and detail. No text, no watermark, no shadow, no background. This is one
standalone person asset for a team page, not a finished card or collage.
