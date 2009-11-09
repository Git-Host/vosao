<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ page import="org.vosao.business.UserPreferences" %>
<% UserPreferences userPreferences = (UserPreferences) session.getAttribute(
		"org.vosao.business.UserPreferences"); 
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <title>Vosao CMS - <decorator:title default="default title" /></title>

    <link rel="stylesheet" href="/static/css/jquery-ui/redmond/jquery-ui.css" type="text/css" />

    <script src="/static/js/jquery.js" language="javascript"></script>
    <script src="/static/js/jquery-ui.js" language="javascript"></script>
    <script src="/static/js/jsonrpc.js" language="javascript"></script>
    <script src="/static/js/vosao.js" language="javascript"></script>
    <script src="/static/js/cms.js" language="javascript"></script>

    <link rel="stylesheet" href="/static/css/style.css" type="text/css" />

    <script language="javascript">

    function onLogout() {
        loginService.logout(function (r) {
            if (r.result == 'success') {
                location.href = '/';
            }
            else {
                showServiceMessages(r);
            }
        });
    }
    
    </script>

    <decorator:head />

    
</head>

<body>

<div id="topbar">

    <div id="leftmenu">
        <a href="/cms">Vosao</a> CMS
        <a href="/cms/pages.jsp">Content</a>
        <a href="/cms/templates.jsp">Templates</a>
        <a href="/cms/folders.jsp">Resources</a>
        <a href="/cms/config.jsp">Configuration</a>
        <a href="/cms/plugins">Plugins</a>
    </div>
    <div id="rightmenu">
        <%= userPreferences.getUser().getEmail() %> 
        | <a href="/cms/profile.jsp">Profile</a> 
        | <a href="#" onclick="onLogout()">Logout</a>
    </div>
    <span class="clear">&#160;</span>
</div>

<div id="wrapper">
    <div class="messages"> </div>

    <decorator:body />
</div>

</body>

</html>