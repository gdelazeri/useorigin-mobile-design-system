(self.webpackChunkuseoriginmobiledesignsystem=self.webpackChunkuseoriginmobiledesignsystem||[]).push([[162,439,731,39,119],{"./components/PasswordInput/PasswordInput.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.StandardWithStrength=exports.StandardWithRequirementsAndStrength=exports.StandardWithRequirements=exports.Standard=exports.OutlinedWithStrength=exports.OutlinedWithRequirementsAndStrength=exports.OutlinedWithRequirements=exports.Outlined=exports.FilledWithStrength=exports.FilledWithRequirementsAndStrength=exports.FilledWithRequirements=exports.Filled=void 0;var _PasswordInput=__webpack_require__("./components/PasswordInput/PasswordInput.tsx"),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"PasswordInput",component:_PasswordInput.PasswordInput,decorators:[function(Story){return(0,_jsxRuntime.jsx)(_View.default,{style:{padding:16},children:(0,_jsxRuntime.jsx)(Story,{})})}]};exports.default=meta,exports.Outlined={args:{label:"Password",placeholder:"Placeholder"}},exports.OutlinedWithStrength={args:{label:"Password",placeholder:"Placeholder",showStrengthIndicator:!0}},exports.OutlinedWithRequirements={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0}},exports.OutlinedWithRequirementsAndStrength={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0,showStrengthIndicator:!0}},exports.Filled={args:{label:"Password",placeholder:"Placeholder",variant:"filled"}},exports.FilledWithStrength={args:{label:"Password",placeholder:"Placeholder",showStrengthIndicator:!0}},exports.FilledWithRequirements={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0}},exports.FilledWithRequirementsAndStrength={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0,showStrengthIndicator:!0}},exports.Standard={args:{label:"Password",placeholder:"Placeholder",variant:"standard"}},exports.StandardWithStrength={args:{label:"Password",placeholder:"Placeholder",showStrengthIndicator:!0}},exports.StandardWithRequirements={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0}},exports.StandardWithRequirementsAndStrength={args:{label:"Password",placeholder:"Placeholder",showRequirements:!0,showStrengthIndicator:!0}};module.exports.__namedExportsOrder=["StandardWithStrength","StandardWithRequirementsAndStrength","StandardWithRequirements","Standard","OutlinedWithStrength","OutlinedWithRequirementsAndStrength","OutlinedWithRequirements","Outlined","FilledWithStrength","FilledWithRequirementsAndStrength","FilledWithRequirements","Filled"]},"./components/PasswordInput/PasswordInput.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PasswordInput=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_checkPasswordStrength=__webpack_require__("./node_modules/check-password-strength/dist/index.mjs"),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_TextInput=__webpack_require__("./components/TextInput/TextInput.tsx"),_Typography=__webpack_require__("./components/Typography/Typography.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PasswordInput=exports.PasswordInput=function PasswordInput(props){var showStrengthIndicator=props.showStrengthIndicator,showRequirements=props.showRequirements,_React$useState=_react.default.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1],_React$useState3=_react.default.useState(""),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),password=_React$useState4[0],setPassword=_React$useState4[1],passwordStrengthColors=["transparent","#e54242","#f99f4b","#1493ff","#37c565"],_calculatePasswordStr=calculatePasswordStrength(password),id=_calculatePasswordStr.id,value=_calculatePasswordStr.value;return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_TextInput.TextInput,Object.assign({},props,{onChange:setPassword,secureTextEntry:!showPassword,rightElement:(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput.Icon,{icon:showPassword?"eye-off":"eye",onPress:function onPress(){return setShowPassword(!showPassword)}})})),showStrengthIndicator&&(0,_jsxRuntime.jsxs)(_View.default,{style:styles.strenghtContainer,children:[(0,_jsxRuntime.jsx)(_reactNativePaper.ProgressBar,{progress:id/(passwordStrengthColors.length-1),color:passwordStrengthColors[id],style:styles.progressBar}),(0,_jsxRuntime.jsx)(_Typography.Typography,{variant:"subtitle2",color:passwordStrengthColors[id],children:value})]}),showRequirements&&(0,_jsxRuntime.jsxs)(_View.default,{style:styles.requirementsContainer,children:[(0,_jsxRuntime.jsx)(_Typography.Typography,{variant:"body2",color:"#333",children:"Minimum length of 8 characters"}),(0,_jsxRuntime.jsx)(_Typography.Typography,{variant:"body2",color:"#333",children:"Must contain uppercase and lowercase letters"}),(0,_jsxRuntime.jsx)(_Typography.Typography,{variant:"body2",color:"#333",children:"Must contain at least one number"}),(0,_jsxRuntime.jsx)(_Typography.Typography,{variant:"body2",color:"#333",children:"Must contain at least one special character"})]})]})},calculatePasswordStrength=function calculatePasswordStrength(password){return(0,_checkPasswordStrength.passwordStrength)(password,[{id:0,value:"",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:0,minLength:2},{id:2,value:"Fair",minDiversity:2,minLength:6},{id:3,value:"Good",minDiversity:3,minLength:6},{id:4,value:"Strong",minDiversity:4,minLength:10}])},styles=_StyleSheet.default.create({requirementsContainer:{marginTop:8},strenghtContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:8},progressBar:{width:_Dimensions.default.get("window").width/2,borderRadius:8,height:6}});try{PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",displayName:"PasswordInput",props:{showStrengthIndicator:{defaultValue:null,description:"",name:"showStrengthIndicator",required:!1,type:{name:"boolean",raw:null,value:null}},showRequirements:{defaultValue:null,description:"",name:"showRequirements",required:!1,type:{name:"boolean",raw:null,value:null}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string",raw:null,value:null}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void",raw:null,value:null}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"TextInputVariant",raw:null,value:null}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean",raw:null,value:null}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string",raw:null,value:null}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string",raw:null,value:null}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean",raw:null,value:null}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"TextInputMargin",raw:null,value:null}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number",raw:null,value:null}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"normal" | "small"',raw:null,value:null}},keyboardType:{defaultValue:null,description:"",name:"keyboardType",required:!1,type:{name:"KeyboardType",raw:null,value:null}},secureTextEntry:{defaultValue:null,description:"",name:"secureTextEntry",required:!1,type:{name:"boolean",raw:null,value:null}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}}}}}catch(e){}try{PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",displayName:"PasswordInput",props:{showStrengthIndicator:{defaultValue:null,description:"",name:"showStrengthIndicator",required:!1,type:{name:"boolean",raw:null,value:null}},showRequirements:{defaultValue:null,description:"",name:"showRequirements",required:!1,type:{name:"boolean",raw:null,value:null}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string",raw:null,value:null}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void",raw:null,value:null}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"TextInputVariant",raw:null,value:null}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean",raw:null,value:null}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string",raw:null,value:null}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string",raw:null,value:null}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean",raw:null,value:null}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"TextInputMargin",raw:null,value:null}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number",raw:null,value:null}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"normal" | "small"',raw:null,value:null}},keyboardType:{defaultValue:null,description:"",name:"keyboardType",required:!1,type:{name:"KeyboardType",raw:null,value:null}},secureTextEntry:{defaultValue:null,description:"",name:"secureTextEntry",required:!1,type:{name:"boolean",raw:null,value:null}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}}}}}catch(e){}try{PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",displayName:"PasswordInput",props:{showStrengthIndicator:{defaultValue:null,description:"",name:"showStrengthIndicator",required:!1,type:{name:"boolean"}},showRequirements:{defaultValue:null,description:"",name:"showRequirements",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'},{value:'"standard"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"small"'}]}},keyboardType:{defaultValue:null,description:"",name:"keyboardType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"number-pad"'},{value:'"decimal-pad"'},{value:'"numeric"'},{value:'"email-address"'},{value:'"phone-pad"'},{value:'"url"'}]}},secureTextEntry:{defaultValue:null,description:"",name:"secureTextEntry",required:!1,type:{name:"boolean"}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/PasswordInput/PasswordInput.tsx#PasswordInput"]={docgenInfo:PasswordInput.__docgenInfo,name:"PasswordInput",path:"components/PasswordInput/PasswordInput.tsx#PasswordInput"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextInput/TextInput.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInput=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_Tooltip=__webpack_require__("./components/Tooltip/Tooltip.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextInput=exports.TextInput=function TextInput(_ref){var label=_ref.label,placeholder=_ref.placeholder,onChange=_ref.onChange,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,helperText=_ref.helperText,tooltipText=_ref.tooltipText,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"outlined":_ref$variant,_ref$multiline=_ref.multiline,multiline=void 0!==_ref$multiline&&_ref$multiline,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$margin=_ref.margin,margin=void 0===_ref$margin?"none":_ref$margin,maxRows=_ref.maxRows,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$keyboardType=_ref.keyboardType,keyboardType=void 0===_ref$keyboardType?"default":_ref$keyboardType,_ref$secureTextEntry=_ref.secureTextEntry,secureTextEntry=void 0!==_ref$secureTextEntry&&_ref$secureTextEntry,leftElement=_ref.leftElement,rightElement=_ref.rightElement,theme=(0,_reactNativePaper.useTheme)(),_React$useState=_react.default.useState(""),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1],hasHelperText="string"==typeof helperText&&helperText.length>0,hasTooltipText=!!tooltipText,textInputStyle=getCustomTextInputStyle({variant,multiline,maxRows,margin}),helperTextStyle=Object.assign({},styles.helperText,{color:error?theme.colors.error:"#0009"});return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[hasTooltipText&&(0,_jsxRuntime.jsx)(_View.default,{style:styles.tooltipContainer,children:(0,_jsxRuntime.jsx)(_Tooltip.Tooltip,{title:tooltipText,children:(0,_jsxRuntime.jsx)(_View.default,{style:styles.iconContainer,children:(0,_jsxRuntime.jsx)(_reactNativePaper.Icon,{source:"information-outline",size:18,color:"#333"})})})}),(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput,{label,placeholder,placeholderTextColor:"#888",onChangeText:function onChangeText(text){setText(text),onChange&&onChange(text)},value:text,mode:"outlined"!==variant?"flat":"outlined",error,disabled,multiline,style:Object.assign({},textInputStyle),dense:"small"===size,keyboardType,secureTextEntry,left:leftElement,right:rightElement,testID:"text-input"}),hasHelperText&&(0,_jsxRuntime.jsx)(_Text.default,{style:Object.assign({},helperTextStyle),children:helperText})]})},getCustomTextInputStyle=function getCustomTextInputStyle(_ref2){var variant=_ref2.variant,multiline=_ref2.multiline,maxRows=_ref2.maxRows,margin=_ref2.margin,textInputStyle={};return"standard"===variant&&(textInputStyle.backgroundColor="transparent"),multiline&&maxRows&&(textInputStyle.height=16*(maxRows+3)),"none"===margin?textInputStyle.marginTop=-8:(textInputStyle.marginTop="dense"===margin?8:16,textInputStyle.marginBottom="dense"===margin?4:8),textInputStyle},styles=_StyleSheet.default.create({helperText:{fontWeight:"400",fontSize:12,lineHeight:16,marginTop:3,marginRight:14,marginBottom:0,marginLeft:14},tooltipContainer:{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},iconContainer:{paddingVertical:8}});try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string",raw:null,value:null}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void",raw:null,value:null}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"TextInputVariant",raw:null,value:null}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean",raw:null,value:null}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string",raw:null,value:null}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string",raw:null,value:null}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean",raw:null,value:null}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},margin:{defaultValue:{value:"none"},description:"",name:"margin",required:!1,type:{name:"TextInputMargin",raw:null,value:null}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number",raw:null,value:null}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:'"normal" | "small"',raw:null,value:null}},keyboardType:{defaultValue:{value:"default"},description:"",name:"keyboardType",required:!1,type:{name:"KeyboardType",raw:null,value:null}},secureTextEntry:{defaultValue:{value:"false"},description:"",name:"secureTextEntry",required:!1,type:{name:"boolean",raw:null,value:null}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}}}}}catch(e){}try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string",raw:null,value:null}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void",raw:null,value:null}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"TextInputVariant",raw:null,value:null}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean",raw:null,value:null}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string",raw:null,value:null}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string",raw:null,value:null}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean",raw:null,value:null}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},margin:{defaultValue:{value:"none"},description:"",name:"margin",required:!1,type:{name:"TextInputMargin",raw:null,value:null}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number",raw:null,value:null}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:'"normal" | "small"',raw:null,value:null}},keyboardType:{defaultValue:{value:"default"},description:"",name:"keyboardType",required:!1,type:{name:"KeyboardType",raw:null,value:null}},secureTextEntry:{defaultValue:{value:"false"},description:"",name:"secureTextEntry",required:!1,type:{name:"boolean",raw:null,value:null}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"React.ReactElement",raw:null,value:null}}}}}catch(e){}try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'},{value:'"standard"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"none"},description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"small"'}]}},keyboardType:{defaultValue:{value:"default"},description:"",name:"keyboardType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"number-pad"'},{value:'"decimal-pad"'},{value:'"numeric"'},{value:'"email-address"'},{value:'"phone-pad"'},{value:'"url"'}]}},secureTextEntry:{defaultValue:{value:"false"},description:"",name:"secureTextEntry",required:!1,type:{name:"boolean"}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextInput/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"components/TextInput/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./components/Tooltip/Tooltip.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tooltip=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tooltip=exports.Tooltip=function Tooltip(_ref){var children=_ref.children,title=_ref.title;return(0,_jsxRuntime.jsx)(_reactNativePaper.Tooltip,{title,enterTouchDelay:100,children})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string",raw:null,value:null}}}}}catch(e){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string",raw:null,value:null}}}}}catch(e){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typography/Typography.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Typography=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Typography=exports.Typography=function Typography(_ref){var children=_ref.children,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"h1":_ref$variant,color=_ref.color,_ref$gutterBottom=_ref.gutterBottom,gutterBottom=void 0!==_ref$gutterBottom&&_ref$gutterBottom,_ref$align=_ref.align,align=void 0===_ref$align?"auto":_ref$align,style=Object.assign({},styles[variant],{marginBottom:gutterBottom?8:0,color,textAlign:align});return(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style,children})},styles=_StyleSheet.default.create({h1:{fontSize:96,fontWeight:"300",letterSpacing:-1.5},h2:{fontSize:60,fontWeight:"300",letterSpacing:-.5},h3:{fontSize:48,fontWeight:"400"},h4:{fontSize:34,fontWeight:"400",letterSpacing:.25},h5:{fontSize:24,fontWeight:"400"},h6:{fontSize:20,fontWeight:"500",letterSpacing:.15},subtitle1:{fontSize:16,fontWeight:"400",letterSpacing:.15},subtitle2:{fontSize:14,fontWeight:"500",letterSpacing:.1},body1:{fontSize:16,fontWeight:"400",letterSpacing:.5},body2:{fontSize:14,fontWeight:"400",letterSpacing:.25}});try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"h1"},description:"",name:"variant",required:!1,type:{name:"TypographyVariant",raw:null,value:null}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string",raw:null,value:null}},gutterBottom:{defaultValue:{value:"false"},description:"",name:"gutterBottom",required:!1,type:{name:"boolean",raw:null,value:null}},align:{defaultValue:{value:"auto"},description:"",name:"align",required:!1,type:{name:"TypographyAlign",raw:null,value:null}}}}}catch(e){}try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"h1"},description:"",name:"variant",required:!1,type:{name:"TypographyVariant",raw:null,value:null}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string",raw:null,value:null}},gutterBottom:{defaultValue:{value:"false"},description:"",name:"gutterBottom",required:!1,type:{name:"boolean",raw:null,value:null}},align:{defaultValue:{value:"auto"},description:"",name:"align",required:!1,type:{name:"TypographyAlign",raw:null,value:null}}}}}catch(e){}try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"h1"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"body1"'},{value:'"body2"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},gutterBottom:{defaultValue:{value:"false"},description:"",name:"gutterBottom",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"auto"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/check-password-strength/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>index,defaultOptions:()=>defaultOptions_1,passwordStrength:()=>passwordStrength_1});var src={exports:{}};const defaultOptions=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:4,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:10}],passwordStrength=(password,options=defaultOptions,allowedSymbols="!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~")=>{let passwordCopy=password||"";options[0].minDiversity=0,options[0].minLength=0;const rules=[{regex:"[a-z]",message:"lowercase"},{regex:"[A-Z]",message:"uppercase"},{regex:"[0-9]",message:"number"}];allowedSymbols&&rules.push({regex:`[${allowedSymbols}]`,message:"symbol"});let strength={};strength.contains=rules.filter((rule=>new RegExp(`${rule.regex}`).test(passwordCopy))).map((rule=>rule.message)),strength.length=passwordCopy.length;let fulfilledOptions=options.filter((option=>strength.contains.length>=option.minDiversity)).filter((option=>strength.length>=option.minLength)).sort(((o1,o2)=>o2.id-o1.id)).map((option=>({id:option.id,value:option.value})));return Object.assign(strength,fulfilledOptions[0]),strength};src.exports={passwordStrength,defaultOptions};var passwordStrength_1=src.exports.passwordStrength=passwordStrength,defaultOptions_1=src.exports.defaultOptions=defaultOptions,index=getDefaultExportFromCjs(src.exports)}}]);