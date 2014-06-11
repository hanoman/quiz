<%@ Page Language="C#" MasterPageFile="~/Library/MasterPages/Global960NewSiteHeader.Master" AutoEventWireup="true" Title="Quiz" %>

<%@ MasterType VirtualPath="~/Library/MasterPages/Global960NewSiteHeader.Master" %>
<%@ Register Src="/Library/Controls/OASSetupScript.ascx" TagName="OASSetupScript" TagPrefix="ucOAS" %>
<%@ Register Src="~/Library/Controls/BreadCrumb.ascx" TagName="BreadCrumb" TagPrefix="uc3" %>


<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeaderContentHolder" runat="server">
    <%--Meta Information--%>
    <meta name="viewport" content="width=1024">
    <meta name="keywords" content="" />
    <meta name="description" content="" />

    <%--CSS--%>
    <link href="Media/css/styles.css" media="All" rel="stylesheet" type="text/css" />

    <%--Javascript--%>
    <script type="text/javascript" src="Media/script/Init.js"></script>

</asp:Content>

<%--SITEMAP--%>
<asp:Content ID="SiteMapContent" ContentPlaceHolderID="CenterHeaderContent" runat="server"></asp:Content>

<%----CONTENT----%>
<asp:Content ID="MainContent" ContentPlaceHolderID="MasterContentHolder" runat="server">
    <asp:ScriptManager ID="smScriptManager" runat="server" />

<div class="positionRelative">

    <div id='preloader'>
        <img src="/Global/images/ajaxLoaders/Sams-Standard-Chasing-Circle.gif">
    </div>

    <div class="main_content_full">
        <div class="inner-content">

            <div class="bottom-section">
                <div class="container_12" id="mod-divider">

                    <div class="quizz-mod">
                        <div class="quiz">
                            <img src="Media/images/quizz-mod.jpg" alt="" class="introImg">
                            <a href="" class="beginQuizHS" track="CC_StartQuiz"></a>
                        </div>
                    </div>

                </div>
            </div>
        </div> <!-- inner-content-end -->
    </div> <!-- main-content-end -->

</div>
</asp:Content>