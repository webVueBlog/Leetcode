/**
 * static:无特殊定位，对象遵循正常文档流。top，right，bottom，left等属性不会被应用。
 * relative:对象遵循正常文档流，但将依据top，right，bottom，left等属性在正常文档流中偏移位置。 而其层叠通过z-index属性定义。
 * absolute:对象脱离正常文档流，使用top，right，bottom，left等属性进行绝对定位。而其层叠通过z-index属性定义。
 * fixed:对象脱离正常文档流，使用top，right，bottom，left等属性以窗口为参考点进行定位，当出现 滚动条时，对象不会随着滚动。而其层叠通过z-index属性定义。
 * sticky:具体是类似 relative 和 fixed，在 viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后 应用 fixed 布局，由 top 决定。 */