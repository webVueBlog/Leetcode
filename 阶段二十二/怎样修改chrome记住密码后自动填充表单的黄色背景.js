/**

-webkit-text-fill-color 设置文本颜色，-webkit-box-shadow inset设置填充

<form>
<label for="username">name: </label>
<input type="text" name="username" id="username"/>
</form>


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
   -webkit-text-fill-color: yellow;
   -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}
*/