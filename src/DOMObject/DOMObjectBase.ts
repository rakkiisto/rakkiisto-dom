export class DOMObjectBase {
  constructor(public dom: HTMLElement) {}

  addHTMLElement(element: HTMLElement) {
    this.dom.appendChild(element)
  }
  add(object: DOMObjectBase) {
    this.addHTMLElement(object.dom)
  }
  removeHTMLElemnt(element: HTMLElement) {
    this.dom.removeChild(element)
  }
  remove(object: DOMObjectBase) {
    this.dom.removeChild(object.dom)
  }
  destroy() {
    this.dom.remove()
  }

  get id() {
    return this.dom.id
  }
  set id(value: string) {
    this.dom.id = value
  }
  get style(): CSSStyleDeclaration {
    return this.dom.style
  }

  copyStyleFrom(style: CSSStyleDeclaration) {
    const keys =
      'alignContent alignItems alignSelf alignmentBaseline all animation animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction backfaceVisibility background backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPosition backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize baselineShift blockSize border borderBlockEnd borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStart borderBlockStartColor borderBlockStartStyle borderBlockStartWidth borderBottom borderBottomColor borderBottomLeftRadius borderBottomRightRadius borderBottomStyle borderBottomWidth borderCollapse borderColor borderImage borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderInlineEnd borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStart borderInlineStartColor borderInlineStartStyle borderInlineStartWidth borderLeft borderLeftColor borderLeftStyle borderLeftWidth borderRadius borderRight borderRightColor borderRightStyle borderRightWidth borderSpacing borderStyle borderTop borderTopColor borderTopLeftRadius borderTopRightRadius borderTopStyle borderTopWidth borderWidth bottom boxShadow boxSizing breakAfter breakBefore breakInside captionSide caretColor clear clip clipPath clipRule color colorInterpolation colorInterpolationFilters columnCount columnFill columnGap columnRule columnRuleColor columnRuleStyle columnRuleWidth columnSpan columnWidth columns content counterIncrement counterReset cssFloat cssText cursor direction display dominantBaseline emptyCells fill fillOpacity fillRule filter flex flexBasis flexDirection flexFlow flexGrow flexShrink flexWrap float floodColor floodOpacity font fontFamily fontFeatureSettings fontKerning fontSize fontSizeAdjust fontStretch fontStyle fontSynthesis fontVariant fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight gap glyphOrientationVertical grid gridArea gridAutoColumns gridAutoFlow gridAutoRows gridColumn gridColumnEnd gridColumnGap gridColumnStart gridGap gridRow gridRowEnd gridRowGap gridRowStart gridTemplate gridTemplateAreas gridTemplateColumns gridTemplateRows height hyphens imageOrientation imageRendering inlineSize justifyContent justifyItems justifySelf left letterSpacing lightingColor lineBreak lineHeight listStyle listStyleImage listStylePosition listStyleType margin marginBlockEnd marginBlockStart marginBottom marginInlineEnd marginInlineStart marginLeft marginRight marginTop marker markerEnd markerMid markerStart mask maskComposite maskImage maskPosition maskRepeat maskSize maskType maxBlockSize maxHeight maxInlineSize maxWidth minBlockSize minHeight minInlineSize minWidth objectFit objectPosition opacity order orphans outline outlineColor outlineOffset outlineStyle outlineWidth overflow overflowAnchor overflowWrap overflowX overflowY overscrollBehavior overscrollBehaviorBlock overscrollBehaviorInline overscrollBehaviorX overscrollBehaviorY padding paddingBlockEnd paddingBlockStart paddingBottom paddingInlineEnd paddingInlineStart paddingLeft paddingRight paddingTop pageBreakAfter pageBreakBefore pageBreakInside paintOrder perspective perspectiveOrigin placeContent placeItems placeSelf pointerEvents position quotes resize right rotate rowGap rubyAlign rubyPosition scale scrollBehavior shapeRendering stopColor stopOpacity stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth tabSize tableLayout textAlign textAlignLast textAnchor textCombineUpright textDecoration textDecorationColor textDecorationLine textDecorationStyle textEmphasis textEmphasisColor textEmphasisPosition textEmphasisStyle textIndent textJustify textOrientation textOverflow textRendering textShadow textTransform textUnderlinePosition top touchAction transform transformBox transformOrigin transformStyle transition transitionDelay transitionDuration transitionProperty transitionTimingFunction translate unicodeBidi userSelect verticalAlign visibility whiteSpace widows width willChange wordBreak wordSpacing wordWrap writingMode zIndex mixBlendMode'
    keys.split(' ').forEach(key => (this.style[key] = style[key]))
    return this
  }
}
