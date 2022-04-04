/**

IE5.5 发明了文档模式的概念，即可以使用 doctype 切换文档模式。

最初的文档模式有两种：混杂模式（quirks mode）和标准模式（standards mode）。

第三种文档模式：准标准模式（almost standards mode）。没有标准规定得那么严格。主要区别在于如何对待图片元素周围的空白

混杂模式在不同浏览器中的差异非常大

标准模式通过下列几种文档类型声明开启：
<!-- HTML 4.01 Strict --> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd"> 
<!-- XHTML 1.0 Strict --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<!-- HTML5 --> 
<!DOCTYPE html>

准标准模式通过过渡性文档类型（Transitional）和框架集文档类型（Frameset）来触发：
<!-- HTML 4.01 Transitional --> 
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd"> 
<!-- HTML 4.01 Frameset --> 
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd"> 
<!-- XHTML 1.0 Transitional --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<!-- XHTML 1.0 Frameset --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">



*/