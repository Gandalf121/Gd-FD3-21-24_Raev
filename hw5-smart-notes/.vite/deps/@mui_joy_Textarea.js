"use client";
import {
  appendOwnerState,
  extractEventHandlers,
  mergeSlotProps,
  resolveComponentProps,
  useClassNamesOverride,
  useSlotProps
} from "./chunk-WJQEIZDH.js";
import "./chunk-RRJ5VGGI.js";
import {
  colorChannel,
  createCssVarsProvider,
  createGetCssVar,
  createStyled,
  prepareCssVars_default,
  useThemeProps
} from "./chunk-A4NPDO5O.js";
import {
  debounce,
  init_useControlled,
  init_utils,
  ownerWindow,
  useControlled,
  useEnhancedEffect_default,
  useForkRef
} from "./chunk-HT7KH46Z.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  applyStyles,
  capitalize,
  composeClasses,
  createBreakpoints,
  createSpacing,
  deepmerge,
  defaultSxConfig_default,
  generateUtilityClass,
  generateUtilityClasses,
  globalStateClasses,
  init_createTheme,
  init_extends,
  init_formatMuiErrorMessage,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  require_jsx_runtime,
  require_prop_types,
  styleFunctionSx_default
} from "./chunk-XPFJ7I7X.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/joy/Textarea/Textarea.js
init_objectWithoutPropertiesLoose();
init_extends();
var React10 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/base/composeClasses/index.js
init_utils();

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflowing;
}
var TextareaAutosize = React.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = React.useRef(null);
  const calculateTextareaStyles = React.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const syncHeight = React.useCallback(() => {
    const textareaStyles = calculateTextareaStyles();
    if (isEmpty(textareaStyles)) {
      return;
    }
    const input = inputRef.current;
    input.style.height = `${textareaStyles.outerHeightStyle}px`;
    input.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  useEnhancedEffect_default(() => {
    const handleResize = () => {
      syncHeight();
    };
    let rAF;
    const rAFHandleResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        handleResize();
      });
    };
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(false ? rAFHandleResize : handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight]);
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime2.jsxs)(React.Fragment, {
    children: [(0, import_jsx_runtime.jsx)("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style
    }, other)), (0, import_jsx_runtime.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types.default.string,
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * @ignore
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string])
} : void 0;

// node_modules/@mui/joy/styles/identifier.js
var identifier_default = "$$joy";

// node_modules/@mui/joy/styles/extendTheme.js
init_extends();
init_objectWithoutPropertiesLoose();
init_utils();
init_createTheme();

// node_modules/@mui/joy/styles/sxConfig.js
init_extends();
var sxConfig = _extends({}, defaultSxConfig_default, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: "radius"
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: "shadow"
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: "fontFamily"
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: "fontSize"
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: "fontWeight"
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: "letterSpacing"
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: "lineHeight"
  }
});
var sxConfig_default = sxConfig;

// node_modules/@mui/joy/colors/colors.js
var colors = {
  grey: {
    50: "#FBFCFE",
    100: "#F0F4F8",
    200: "#DDE7EE",
    300: "#CDD7E1",
    400: "#9FA6AD",
    500: "#636B74",
    600: "#555E68",
    700: "#32383E",
    800: "#171A1C",
    900: "#0B0D0E"
  },
  blue: {
    50: "#EDF5FD",
    100: "#E3EFFB",
    200: "#C7DFF7",
    300: "#97C3F0",
    400: "#4393E4",
    500: "#0B6BCB",
    600: "#185EA5",
    700: "#12467B",
    800: "#0A2744",
    900: "#051423"
  },
  yellow: {
    50: "#FEFAF6",
    100: "#FDF0E1",
    200: "#FCE1C2",
    300: "#F3C896",
    400: "#EA9A3E",
    500: "#9A5B13",
    600: "#72430D",
    700: "#492B08",
    800: "#2E1B05",
    900: "#1D1002"
  },
  red: {
    50: "#FEF6F6",
    100: "#FCE4E4",
    200: "#F7C5C5",
    300: "#F09898",
    400: "#E47474",
    500: "#C41C1C",
    600: "#A51818",
    700: "#7D1212",
    800: "#430A0A",
    900: "#240505"
  },
  green: {
    50: "#F6FEF6",
    100: "#E3FBE3",
    200: "#C7F7C7",
    300: "#A1E8A1",
    400: "#51BC51",
    500: "#1F7A1F",
    600: "#136C13",
    700: "#0A470A",
    800: "#042F04",
    900: "#021D02"
  }
};
var colors_default = colors;

// node_modules/@mui/joy/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/^(typography|variants|breakpoints)$/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/^(mode)$/)) || keys[0] === "focus" && keys[1] !== "thickness";
}

// node_modules/@mui/joy/className/index.js
init_utils();
init_utils();
var generateUtilityClass2 = (componentName, slot) => generateUtilityClass(componentName, slot, "Mui");
var generateUtilityClasses2 = (componentName, slots) => generateUtilityClasses(componentName, slots, "Mui");

// node_modules/@mui/joy/styles/variantUtils.js
init_extends();
var isVariantPalette = (colorPalette) => colorPalette && typeof colorPalette === "object" && Object.keys(colorPalette).some((value) => {
  var _value$match;
  return (_value$match = value.match) == null ? void 0 : _value$match.call(value, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
});
var assignCss = (target, variantVar, value) => {
  if (variantVar.includes("Color")) {
    target.color = value;
  }
  if (variantVar.includes("Bg")) {
    target.backgroundColor = value;
  }
  if (variantVar.includes("Border")) {
    target.borderColor = value;
  }
};
var createVariantStyle = (name, palette, getCssVar) => {
  const result = {};
  Object.entries(palette || {}).forEach(([variantVar, value]) => {
    if (variantVar.match(new RegExp(`${name}(color|bg|border)`, "i")) && !!value) {
      const cssVar = getCssVar ? getCssVar(variantVar) : value;
      if (variantVar.includes("Disabled")) {
        result.pointerEvents = "none";
        result.cursor = "default";
        result["--Icon-color"] = "currentColor";
      }
      if (variantVar.match(/(Hover|Active|Disabled)/)) {
        assignCss(result, variantVar, cssVar);
      } else {
        if (!result["--variant-borderWidth"]) {
          result["--variant-borderWidth"] = "0px";
        }
        if (variantVar.includes("Border")) {
          result["--variant-borderWidth"] = "1px";
          result.border = "var(--variant-borderWidth) solid";
        }
        assignCss(result, variantVar, cssVar);
      }
    }
  });
  return result;
};
var createVariant = (variant, theme) => {
  let result = {};
  if (theme) {
    const {
      getCssVar,
      palette
    } = theme;
    Object.entries(palette).forEach((entry) => {
      const [color, colorPalette] = entry;
      if (isVariantPalette(colorPalette) && typeof colorPalette === "object") {
        result = _extends({}, result, {
          [color]: createVariantStyle(variant, colorPalette, (variantVar) => `var(--variant-${variantVar}, ${getCssVar(`palette-${color}-${variantVar}`, palette[color][variantVar])})`)
        });
      }
    });
  }
  result.context = createVariantStyle(variant, {
    plainColor: "var(--variant-plainColor)",
    plainHoverColor: `var(--variant-plainHoverColor)`,
    plainHoverBg: "var(--variant-plainHoverBg)",
    plainActiveBg: "var(--variant-plainActiveBg)",
    plainDisabledColor: "var(--variant-plainDisabledColor)",
    outlinedColor: "var(--variant-outlinedColor)",
    outlinedBorder: "var(--variant-outlinedBorder)",
    outlinedHoverColor: `var(--variant-outlinedHoverColor)`,
    outlinedHoverBorder: `var(--variant-outlinedHoverBorder)`,
    outlinedHoverBg: `var(--variant-outlinedHoverBg)`,
    outlinedActiveBg: `var(--variant-outlinedActiveBg)`,
    outlinedDisabledColor: `var(--variant-outlinedDisabledColor)`,
    outlinedDisabledBorder: `var(--variant-outlinedDisabledBorder)`,
    softColor: "var(--variant-softColor)",
    softBg: "var(--variant-softBg)",
    softHoverColor: "var(--variant-softHoverColor)",
    softHoverBg: "var(--variant-softHoverBg)",
    softActiveBg: "var(--variant-softActiveBg)",
    softDisabledColor: "var(--variant-softDisabledColor)",
    softDisabledBg: "var(--variant-softDisabledBg)",
    solidColor: "var(--variant-solidColor)",
    solidBg: "var(--variant-solidBg)",
    solidHoverBg: "var(--variant-solidHoverBg)",
    solidActiveBg: "var(--variant-solidActiveBg)",
    solidDisabledColor: "var(--variant-solidDisabledColor)",
    solidDisabledBg: "var(--variant-solidDisabledBg)"
  });
  return result;
};

// node_modules/@mui/joy/styles/extendTheme.js
var _excluded2 = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "shouldSkipGeneratingVar"];
var _excluded22 = ["colorSchemes"];
var createGetCssVar2 = (cssVarPrefix = "joy") => createGetCssVar(cssVarPrefix);
function extendTheme(themeOptions) {
  var _scalesInput$colorSch, _scalesInput$colorSch2, _scalesInput$colorSch3, _scalesInput$colorSch4, _scalesInput$colorSch5, _scalesInput$colorSch6, _scalesInput$focus$th, _scalesInput$focus, _scalesInput$focus$th2, _scalesInput$focus2;
  const _ref = themeOptions || {}, {
    cssVarPrefix = "joy",
    breakpoints,
    spacing,
    components: componentsInput,
    variants: variantsInput,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar
  } = _ref, scalesInput = _objectWithoutPropertiesLoose(_ref, _excluded2);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const defaultColors = {
    primary: colors_default.blue,
    neutral: colors_default.grey,
    danger: colors_default.red,
    success: colors_default.green,
    warning: colors_default.yellow,
    common: {
      white: "#FFF",
      black: "#000"
    }
  };
  const getCssVarColor = (cssVar) => {
    var _defaultColors$color;
    const tokens = cssVar.split("-");
    const color = tokens[1];
    const index = tokens[2];
    return getCssVar(cssVar, (_defaultColors$color = defaultColors[color]) == null ? void 0 : _defaultColors$color[index]);
  };
  const createLightModeVariantVariables = (color) => ({
    plainColor: getCssVarColor(`palette-${color}-500`),
    plainHoverBg: getCssVarColor(`palette-${color}-100`),
    plainActiveBg: getCssVarColor(`palette-${color}-200`),
    plainDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedColor: getCssVarColor(`palette-${color}-500`),
    outlinedBorder: getCssVarColor(`palette-${color}-300`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-200`),
    softColor: getCssVarColor(`palette-${color}-700`),
    softBg: getCssVarColor(`palette-${color}-100`),
    softHoverBg: getCssVarColor(`palette-${color}-200`),
    softActiveColor: getCssVarColor(`palette-${color}-800`),
    softActiveBg: getCssVarColor(`palette-${color}-300`),
    softDisabledColor: getCssVarColor(`palette-neutral-400`),
    softDisabledBg: getCssVarColor(`palette-neutral-50`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-400`),
    solidDisabledBg: getCssVarColor(`palette-neutral-100`)
  });
  const createDarkModeVariantVariables = (color) => ({
    plainColor: getCssVarColor(`palette-${color}-300`),
    plainHoverBg: getCssVarColor(`palette-${color}-800`),
    plainActiveBg: getCssVarColor(`palette-${color}-700`),
    plainDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedColor: getCssVarColor(`palette-${color}-200`),
    outlinedBorder: getCssVarColor(`palette-${color}-700`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-700`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
    softColor: getCssVarColor(`palette-${color}-200`),
    softBg: getCssVarColor(`palette-${color}-800`),
    softHoverBg: getCssVarColor(`palette-${color}-700`),
    softActiveColor: getCssVarColor(`palette-${color}-100`),
    softActiveBg: getCssVarColor(`palette-${color}-600`),
    softDisabledColor: getCssVarColor(`palette-neutral-500`),
    softDisabledBg: getCssVarColor(`palette-neutral-800`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-500`),
    solidDisabledBg: getCssVarColor(`palette-neutral-800`)
  });
  const lightColorSystem = {
    palette: {
      mode: "light",
      primary: _extends({}, defaultColors.primary, createLightModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, createLightModeVariantVariables("neutral"), {
        plainColor: getCssVarColor("palette-neutral-700"),
        plainHoverColor: getCssVarColor(`palette-neutral-900`),
        outlinedColor: getCssVarColor("palette-neutral-700")
      }),
      danger: _extends({}, defaultColors.danger, createLightModeVariantVariables("danger")),
      success: _extends({}, defaultColors.success, createLightModeVariantVariables("success")),
      warning: _extends({}, defaultColors.warning, createLightModeVariantVariables("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: getCssVarColor("palette-neutral-800"),
        secondary: getCssVarColor("palette-neutral-700"),
        tertiary: getCssVarColor("palette-neutral-600"),
        icon: getCssVarColor("palette-neutral-500")
      },
      background: {
        body: getCssVarColor("palette-common-white"),
        surface: getCssVarColor("palette-neutral-50"),
        popup: getCssVarColor("palette-common-white"),
        level1: getCssVarColor("palette-neutral-100"),
        level2: getCssVarColor("palette-neutral-200"),
        level3: getCssVarColor("palette-neutral-300"),
        tooltip: getCssVarColor("palette-neutral-500"),
        backdrop: `rgba(${getCssVar(
          "palette-neutral-darkChannel",
          colorChannel(defaultColors.neutral[900])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.2)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "21 21 21",
    shadowOpacity: "0.08"
  };
  const darkColorSystem = {
    palette: {
      mode: "dark",
      primary: _extends({}, defaultColors.primary, createDarkModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, createDarkModeVariantVariables("neutral"), {
        plainColor: getCssVarColor("palette-neutral-300"),
        plainHoverColor: getCssVarColor(`palette-neutral-300`)
      }),
      danger: _extends({}, defaultColors.danger, createDarkModeVariantVariables("danger")),
      success: _extends({}, defaultColors.success, createDarkModeVariantVariables("success")),
      warning: _extends({}, defaultColors.warning, createDarkModeVariantVariables("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: getCssVarColor("palette-neutral-100"),
        secondary: getCssVarColor("palette-neutral-300"),
        tertiary: getCssVarColor("palette-neutral-400"),
        icon: getCssVarColor("palette-neutral-400")
      },
      background: {
        body: getCssVarColor("palette-common-black"),
        surface: getCssVarColor("palette-neutral-900"),
        popup: getCssVarColor("palette-common-black"),
        level1: getCssVarColor("palette-neutral-800"),
        level2: getCssVarColor("palette-neutral-700"),
        level3: getCssVarColor("palette-neutral-600"),
        tooltip: getCssVarColor("palette-neutral-600"),
        backdrop: `rgba(${getCssVar(
          "palette-neutral-darkChannel",
          colorChannel(defaultColors.neutral[50])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "0 0 0",
    shadowOpacity: "0.6"
  };
  const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  const fontFamily = _extends({
    body: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    display: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    fallback: fontFamilyFallback
  }, scalesInput.fontFamily);
  const fontWeight = _extends({
    sm: 300,
    // regular
    md: 500,
    // medium
    lg: 600,
    // semi-bold
    xl: 700
  }, scalesInput.fontWeight);
  const fontSize = _extends({
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    md: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    xl2: "1.5rem",
    // 24px
    xl3: "1.875rem",
    // 30px
    xl4: "2.25rem"
  }, scalesInput.fontSize);
  const lineHeight = _extends({
    xs: "1.33334",
    // largest font sizes: h1, h2
    sm: "1.42858",
    // normal font sizes
    md: "1.5",
    // normal font sizes
    lg: "1.55556",
    // large font sizes for components
    xl: "1.66667"
  }, scalesInput.lineHeight);
  const defaultShadowRing = (_scalesInput$colorSch = (_scalesInput$colorSch2 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch2 = _scalesInput$colorSch2.light) == null ? void 0 : _scalesInput$colorSch2.shadowRing) != null ? _scalesInput$colorSch : lightColorSystem.shadowRing;
  const defaultShadowChannel = (_scalesInput$colorSch3 = (_scalesInput$colorSch4 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch4 = _scalesInput$colorSch4.light) == null ? void 0 : _scalesInput$colorSch4.shadowChannel) != null ? _scalesInput$colorSch3 : lightColorSystem.shadowChannel;
  const defaultShadowOpacity = (_scalesInput$colorSch5 = (_scalesInput$colorSch6 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch6 = _scalesInput$colorSch6.light) == null ? void 0 : _scalesInput$colorSch6.shadowOpacity) != null ? _scalesInput$colorSch5 : lightColorSystem.shadowOpacity;
  const defaultScales = {
    colorSchemes: {
      light: lightColorSystem,
      dark: darkColorSystem
    },
    fontSize,
    fontFamily,
    fontWeight,
    focus: {
      thickness: "2px",
      selector: `&.${generateUtilityClass2("", "focusVisible")}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${getCssVar("focus-thickness", (_scalesInput$focus$th = (_scalesInput$focus = scalesInput.focus) == null ? void 0 : _scalesInput$focus.thickness) != null ? _scalesInput$focus$th : "2px")})`,
        outline: `${getCssVar("focus-thickness", (_scalesInput$focus$th2 = (_scalesInput$focus2 = scalesInput.focus) == null ? void 0 : _scalesInput$focus2.thickness) != null ? _scalesInput$focus$th2 : "2px")} solid ${getCssVar("palette-focusVisible", defaultColors.primary[500])}`
      }
    },
    lineHeight,
    radius: {
      xs: "2px",
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px"
    },
    shadow: {
      xs: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      sm: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 2px 4px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      md: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 6px 12px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      lg: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 12px 16px -4px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      xl: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 20px 24px -4px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1e3,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    },
    typography: {
      h1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl4, ${fontSize.xl4}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl3, ${fontSize.xl3}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h3: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl2, ${fontSize.xl2}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h4: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl, ${fontSize.xl}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-lg": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-md": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-sm": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "body-lg": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      "body-md": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      "body-sm": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      },
      "body-xs": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xs, ${fontSize.xs}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      }
    }
  };
  const _ref2 = scalesInput ? deepmerge(defaultScales, scalesInput) : defaultScales, {
    colorSchemes
  } = _ref2, mergedScales = _objectWithoutPropertiesLoose(_ref2, _excluded22);
  const theme = _extends({
    colorSchemes
  }, mergedScales, {
    breakpoints: createBreakpoints(breakpoints != null ? breakpoints : {}),
    components: deepmerge({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "xl2"
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme: themeProp
          }) => {
            var _themeProp$vars$palet;
            const instanceFontSize = ownerState.instanceFontSize;
            return _extends({
              margin: "var(--Icon-margin)"
            }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
              fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
            }, !ownerState.htmlColor && _extends({
              color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
            }, ownerState.color && ownerState.color !== "inherit" && themeProp.vars.palette[ownerState.color] && {
              color: `rgba(${(_themeProp$vars$palet = themeProp.vars.palette[ownerState.color]) == null ? void 0 : _themeProp$vars$palet.mainChannel} / 1)`
            }), instanceFontSize && instanceFontSize !== "inherit" && {
              "--Icon-fontSize": themeProp.vars.fontSize[instanceFontSize]
            });
          }
        }
      }
    }, componentsInput),
    cssVarPrefix,
    getCssVar,
    spacing: createSpacing(spacing)
  });
  function attachColorChannels(supportedColorScheme, palette) {
    Object.keys(palette).forEach((key) => {
      const channelMapping = {
        main: "500",
        light: "200",
        dark: "700"
      };
      if (supportedColorScheme === "dark") {
        channelMapping.main = 400;
      }
      if (!palette[key].mainChannel && palette[key][channelMapping.main]) {
        palette[key].mainChannel = colorChannel(palette[key][channelMapping.main]);
      }
      if (!palette[key].lightChannel && palette[key][channelMapping.light]) {
        palette[key].lightChannel = colorChannel(palette[key][channelMapping.light]);
      }
      if (!palette[key].darkChannel && palette[key][channelMapping.dark]) {
        palette[key].darkChannel = colorChannel(palette[key][channelMapping.dark]);
      }
    });
  }
  Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
    attachColorChannels(supportedColorScheme, colorSystem.palette);
  });
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  };
  const {
    vars: themeVars,
    generateCssVars
  } = prepareCssVars_default(
    // @ts-ignore property truDark is missing from colorSchemes
    _extends({
      colorSchemes
    }, mergedScales),
    parserConfig
  );
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.unstable_sxConfig = _extends({}, sxConfig_default, themeOptions == null ? void 0 : themeOptions.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  theme.getColorSchemeSelector = (colorScheme) => colorScheme === "light" ? "&" : `&[data-joy-color-scheme="${colorScheme}"], [data-joy-color-scheme="${colorScheme}"] &`;
  const createVariantInput = {
    getCssVar,
    palette: theme.colorSchemes.light.palette
  };
  theme.variants = deepmerge({
    plain: createVariant("plain", createVariantInput),
    plainHover: createVariant("plainHover", createVariantInput),
    plainActive: createVariant("plainActive", createVariantInput),
    plainDisabled: createVariant("plainDisabled", createVariantInput),
    outlined: createVariant("outlined", createVariantInput),
    outlinedHover: createVariant("outlinedHover", createVariantInput),
    outlinedActive: createVariant("outlinedActive", createVariantInput),
    outlinedDisabled: createVariant("outlinedDisabled", createVariantInput),
    soft: createVariant("soft", createVariantInput),
    softHover: createVariant("softHover", createVariantInput),
    softActive: createVariant("softActive", createVariantInput),
    softDisabled: createVariant("softDisabled", createVariantInput),
    solid: createVariant("solid", createVariantInput),
    solidHover: createVariant("solidHover", createVariantInput),
    solidActive: createVariant("solidActive", createVariantInput),
    solidDisabled: createVariant("solidDisabled", createVariantInput)
  }, variantsInput);
  theme.palette = _extends({}, theme.colorSchemes.light.palette, {
    colorScheme: "light"
  });
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
  theme.applyStyles = applyStyles;
  return theme;
}

// node_modules/@mui/joy/styles/defaultTheme.js
var defaultTheme = extendTheme();
var defaultTheme_default = defaultTheme;

// node_modules/@mui/joy/InitColorSchemeScript/InitColorSchemeScript.js
init_extends();
var React2 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var defaultConfig = {
  attribute: "data-joy-color-scheme",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "joy-mode"
};

// node_modules/@mui/joy/styles/CssVarsProvider.js
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScriptSystem
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: defaultConfig.attribute,
  modeStorageKey: defaultConfig.modeStorageKey,
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  }
});

// node_modules/@mui/joy/styles/styled.js
var styled = createStyled({
  defaultTheme: defaultTheme_default,
  themeId: identifier_default
});
var styled_default = styled;

// node_modules/@mui/joy/styles/ThemeProvider.js
var React3 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());

// node_modules/@mui/joy/styles/useThemeProps.js
init_extends();
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: _extends({}, defaultTheme_default, {
      components: {}
    }),
    themeId: identifier_default
  });
}

// node_modules/@mui/joy/utils/useSlot.js
init_extends();
init_objectWithoutPropertiesLoose();
init_utils();
var _excluded3 = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"];
var _excluded23 = ["component", "slots", "slotProps"];
var _excluded32 = ["component"];
function useSlot(name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    getSlotOwnerState,
    internalForwardedProps
  } = parameters, useSlotPropsParams = _objectWithoutPropertiesLoose(parameters, _excluded3);
  const {
    component: rootComponent,
    slots = {
      [name]: void 0
    },
    slotProps = {
      [name]: void 0
    }
  } = externalForwardedProps, other = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded23);
  const elementType = slots[name] || initialElementType;
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const _mergeSlotProps = mergeSlotProps(_extends({
    className
  }, useSlotPropsParams, {
    externalForwardedProps: name === "root" ? other : void 0,
    externalSlotProps: resolvedComponentsProps
  })), {
    props: {
      component: slotComponent
    },
    internalRef
  } = _mergeSlotProps, mergedProps = _objectWithoutPropertiesLoose(_mergeSlotProps.props, _excluded32);
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
  const slotOwnerState = getSlotOwnerState ? getSlotOwnerState(mergedProps) : {};
  const finalOwnerState = _extends({}, ownerState, slotOwnerState);
  const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, _extends({}, name === "root" && !rootComponent && !slots[name] && internalForwardedProps, name !== "root" && !slots[name] && internalForwardedProps, mergedProps, LeafComponent && {
    as: LeafComponent
  }, {
    ref
  }), finalOwnerState);
  Object.keys(slotOwnerState).forEach((propName) => {
    delete props[propName];
  });
  return [elementType, props];
}

// node_modules/@mui/joy/Textarea/textareaClasses.js
function getTextareaUtilityClass(slot) {
  return generateUtilityClass2("MuiTextarea", slot);
}
var textareaClasses = generateUtilityClasses2("MuiTextarea", ["root", "textarea", "startDecorator", "endDecorator", "formControl", "disabled", "error", "focused", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft"]);
var textareaClasses_default = textareaClasses;

// node_modules/@mui/joy/Input/useForwardedInput.js
init_extends();
init_objectWithoutPropertiesLoose();
var React9 = __toESM(require_react());

// node_modules/@mui/base/useInput/useInput.js
init_extends();
init_formatMuiErrorMessage();
var React7 = __toESM(require_react());
init_utils();

// node_modules/@mui/base/FormControl/FormControl.js
init_extends();
init_objectWithoutPropertiesLoose();
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_useControlled();

// node_modules/@mui/base/FormControl/FormControlContext.js
var React4 = __toESM(require_react());
var FormControlContext = React4.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}

// node_modules/@mui/base/generateUtilityClass/index.js
init_generateUtilityClass();
var GLOBAL_CLASS_PREFIX = "base";
function buildStateClass(state) {
  return `${GLOBAL_CLASS_PREFIX}--${state}`;
}
function buildSlotClass(componentName, slot) {
  return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
}
function generateUtilityClass3(componentName, slot) {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? buildStateClass(globalStateClass) : buildSlotClass(componentName, slot);
}

// node_modules/@mui/base/generateUtilityClasses/index.js
function generateUtilityClasses3(componentName, slots) {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass3(componentName, slot);
  });
  return result;
}

// node_modules/@mui/base/FormControl/formControlClasses.js
var COMPONENT_NAME = "FormControl";
function getFormControlUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME, slot);
}
var formControlClasses = generateUtilityClasses3(COMPONENT_NAME, ["root", "disabled", "error", "filled", "focused", "required"]);

// node_modules/@mui/base/FormControl/FormControl.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded4 = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var FormControl = React5.forwardRef(function FormControl2(props, forwardedRef) {
  var _slots$root;
  const {
    defaultValue,
    children,
    disabled = false,
    error = false,
    onChange,
    required = false,
    slotProps = {},
    slots = {},
    value: incomingValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React5.useState(false);
  const focused = focusedState && !disabled;
  React5.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React5.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: (event) => {
        setValue(event.target.value);
        onChange == null || onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ""
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses(ownerState);
  const renderChildren = () => {
    if (typeof children === "function") {
      return children(childContext);
    }
    return children;
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime5.jsx)(FormControlContext.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime5.jsx)(Root, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.node, import_prop_types2.default.func]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types2.default.string,
  /**
   * @ignore
   */
  defaultValue: import_prop_types2.default.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types2.default.bool,
  /**
   * Callback fired when the form element's value is modified.
   */
  onChange: import_prop_types2.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types2.default.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * The value of the form element.
   */
  value: import_prop_types2.default.any
} : void 0;

// node_modules/@mui/base/FormControl/useFormControlContext.js
var React6 = __toESM(require_react());
function useFormControlContext() {
  return React6.useContext(FormControlContext);
}

// node_modules/@mui/base/useInput/useInput.js
function useInput(parameters = {}) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React7.useRef(value != null);
  const handleInputRefWarning = React7.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React7.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React7.useState(false);
  React7.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null || onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      value,
      required,
      disabled
    }, externalProps, {
      ref: handleInputRef
    }, mergedEventHandlers);
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

// node_modules/@mui/joy/FormControl/FormControlContext.js
var React8 = __toESM(require_react());
var FormControlContext2 = React8.createContext(void 0);
if (true) {
  FormControlContext2.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext2;

// node_modules/@mui/joy/Input/useForwardedInput.js
var _excluded5 = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "disabledInProp", "error", "id", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "type", "value"];
function useForwardedInput(props, classes) {
  var _ref;
  const formControl = React9.useContext(FormControlContext_default);
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled: disabledProp,
    disabledInProp,
    error: errorProp,
    id,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const {
    getRootProps,
    getInputProps,
    focused,
    error,
    disabled
  } = useInput({
    disabled: (_ref = disabledInProp != null ? disabledInProp : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledProp,
    defaultValue,
    error: errorProp,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required: required != null ? required : formControl == null ? void 0 : formControl.required,
    value
  });
  const rootStateClasses = {
    [classes.disabled]: disabled,
    [classes.error]: error,
    [classes.focused]: focused,
    [classes.formControl]: Boolean(formControl),
    [className]: className
  };
  const inputStateClasses = {
    [classes.disabled]: disabled
  };
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    disabled,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  return _extends({
    formControl,
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    focused,
    error,
    disabled
  }, other);
}

// node_modules/@mui/joy/Textarea/Textarea.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded6 = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "size", "color", "variant", "startDecorator", "endDecorator", "minRows", "maxRows", "component", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    disabled,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    textarea: ["textarea"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getTextareaUtilityClass, {});
};
var TextareaRoot = styled_default("div", {
  name: "JoyTextarea",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--Textarea-radius": theme.vars.radius.sm,
    "--Textarea-gap": "0.5rem",
    "--Textarea-placeholderColor": "inherit",
    "--Textarea-placeholderOpacity": 0.64,
    "--Textarea-decoratorColor": theme.vars.palette.text.icon,
    "--Textarea-focused": "0",
    "--Textarea-focusedThickness": theme.vars.focus.thickness,
    "--Textarea-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    '&:not([data-inverted-colors="false"])': _extends({}, ownerState.instanceColor && {
      "--_Textarea-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Textarea-focusedHighlight": `var(--_Textarea-focusedHighlight, ${theme.vars.palette.focusVisible})`
    })
  }, ownerState.size === "sm" && {
    "--Textarea-minHeight": "2rem",
    "--Textarea-paddingBlock": "calc(0.375rem - 0.5px - var(--variant-borderWidth, 0px))",
    // to match Input because <textarea> does not center the text at the middle like <input>
    "--Textarea-paddingInline": "0.5rem",
    "--Textarea-decoratorChildHeight": "min(1.5rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Textarea-minHeight": "2.25rem",
    "--Textarea-paddingBlock": "calc(0.375rem - var(--variant-borderWidth, 0px))",
    "--Textarea-paddingInline": "0.75rem",
    "--Textarea-decoratorChildHeight": "min(1.75rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Textarea-minHeight": "3rem",
    "--Textarea-paddingBlock": "calc(0.75rem - var(--variant-borderWidth, 0px))",
    "--Textarea-paddingInline": "1rem",
    "--Textarea-gap": "0.75rem",
    "--Textarea-decoratorChildHeight": "min(2.375rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--_Textarea-paddingBlock": "max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)",
    "--Textarea-decoratorChildRadius": "max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))",
    "--Button-minHeight": "var(--Textarea-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Textarea-decoratorChildHeight)",
    "--Button-radius": "var(--Textarea-decoratorChildRadius)",
    "--IconButton-radius": "var(--Textarea-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Textarea-minHeight)",
    cursor: "text",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingInlineStart: `var(--Textarea-paddingInline)`,
    // the paddingInlineEnd is added to the textarea. It looks better when the scrollbar appears.
    paddingBlock: "var(--Textarea-paddingBlock)",
    borderRadius: "var(--Textarea-radius)"
  }, theme.typography[`body-${ownerState.size}`], variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)",
      // for outlined variant
      boxShadow: `var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)`
    }
  }), {
    "&:hover": _extends({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
      backgroundColor: null,
      // it is not common to change background on hover for Textarea
      cursor: "text"
    }),
    [`&.${textareaClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
    "&:focus-within::before": {
      "--Textarea-focused": "1"
    }
  }];
});
var TextareaInput = styled_default(TextareaAutosize, {
  name: "JoyTextarea",
  slot: "Textarea",
  overridesResolver: (props, styles2) => styles2.textarea
})({
  resize: "none",
  border: "none",
  // remove the native textarea width
  minWidth: 0,
  // remove the native textarea width
  outline: 0,
  // remove the native textarea outline
  padding: 0,
  // remove the native textarea padding
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: "auto",
  alignSelf: "stretch",
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  "&::-webkit-input-placeholder": {
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  }
});
var TextareaStartDecorator = styled_default("div", {
  name: "JoyTextarea",
  slot: "StartDecorator",
  overridesResolver: (props, styles2) => styles2.startDecorator
})({
  display: "flex",
  marginInlineStart: "calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",
  marginInlineEnd: "var(--Textarea-paddingBlock)",
  marginBlockEnd: "var(--Textarea-gap)",
  color: "var(--Textarea-decoratorColor)",
  cursor: "initial"
});
var TextareaEndDecorator = styled_default("div", {
  name: "JoyTextarea",
  slot: "EndDecorator",
  overridesResolver: (props, styles2) => styles2.endDecorator
})({
  display: "flex",
  marginInlineStart: "calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",
  marginInlineEnd: "var(--Textarea-paddingBlock)",
  marginBlockStart: "var(--Textarea-gap)",
  color: "var(--Textarea-decoratorColor)",
  cursor: "initial"
});
var Textarea = React10.forwardRef(function Textarea2(inProps, ref) {
  var _ref, _inProps$disabled, _ref2, _inProps$error, _ref3, _inProps$size, _inProps$color, _formControl$color;
  const props = useThemeProps2({
    props: inProps,
    name: "JoyTextarea"
  });
  const _useForwardedInput = useForwardedInput(props, textareaClasses_default), {
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    formControl,
    focused,
    error: errorProp = false,
    disabled: disabledProp = false,
    size: sizeProp = "md",
    color: colorProp = "neutral",
    variant = "outlined",
    startDecorator,
    endDecorator,
    minRows,
    maxRows,
    component,
    slots = {},
    slotProps = {}
  } = _useForwardedInput, other = _objectWithoutPropertiesLoose(_useForwardedInput, _excluded6);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React10.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const disabled = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledProp;
  const error = (_ref2 = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref2 : errorProp;
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const ownerState = _extends({
    instanceColor: error ? "danger" : inProps.color
  }, props, {
    color,
    disabled,
    error,
    focused,
    size,
    variant
  });
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, rootStateClasses],
    elementType: TextareaRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotTextarea, textareaProps] = useSlot("textarea", {
    additionalProps: {
      id: formControl == null ? void 0 : formControl.htmlFor,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: [classes.textarea, inputStateClasses],
    elementType: TextareaInput,
    internalForwardedProps: _extends({}, propsToForward, {
      minRows,
      maxRows
    }),
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: TextareaStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: TextareaEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime7.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime6.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: startDecorator
    })), (0, import_jsx_runtime6.jsx)(SlotTextarea, _extends({}, textareaProps)), endDecorator && (0, import_jsx_runtime6.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: endDecorator
    }))]
  }));
});
true ? Textarea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types3.default.string]),
  /**
   * @ignore
   */
  disabled: import_prop_types3.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: import_prop_types3.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: import_prop_types3.default.bool,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["sm", "md", "lg"]), import_prop_types3.default.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: import_prop_types3.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types3.default.string])
} : void 0;
var Textarea_default = Textarea;
export {
  Textarea_default as default,
  getTextareaUtilityClass,
  textareaClasses_default as textareaClasses
};
//# sourceMappingURL=@mui_joy_Textarea.js.map
