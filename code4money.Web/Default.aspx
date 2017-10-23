<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="code4money.Web._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        
    <script src="/AngularContents/Modules/Home/HomeController.js"></script>
    <script src="/AngularContents/Modules/Test/TestController.js"></script>
    <script src="/AngularContents/Modules/Test/TestDirective.js"></script>

    <h2>Default.aspx</h2>

    <div ui-view=""></div>

</asp:Content>