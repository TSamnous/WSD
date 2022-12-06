<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <head>
  <style>
    table
    {
      text-align: center;
      border-radius:20px;
      background-color: antiquewhite;
      border-width: 3px;
      border-color:black;
      transition: .2s;
    }
     table td,th
    {
      text-align: center;
      transition: .2s;
      border-radius:8px;
      
    }
    table td:hover
    {
        transform: scale(1.2);

    }
    table:hover
    {
        transform: scale(1.2);

    }
  </style>

  </head>
  <body>
  <center>
  <h2>Games</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Price</th>
      <th>Rating</th>
      <th>genre</th>
      <th>Description</th>
    </tr>
    <xsl:for-each select="game_store/game">
    <tr>
    <td bgcolor="green"><xsl:value-of select="name"/></td>
      <td bgcolor="gray"><xsl:value-of select="price"/></td>
      <td bgcolor="green"><xsl:value-of select="rating"/></td>
      <td bgcolor="green"><xsl:value-of select="genre"/></td>
      <td bgcolor="gray"><xsl:value-of select="description"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2>Games : FREE</h2>
<table border="2">
  <tr bgcolor="#9acd32">
    <th>Name</th>
    <th>Price</th>
    <th>Rating</th>
    <th>genre</th>
    <th>Description</th>
  </tr>
  <xsl:for-each select="game_store/game">
  <xsl:if test="price= 'Free' ">
  <tr>
    <td bgcolor="green"><xsl:value-of select="name"/></td>
    <td bgcolor="gray"><xsl:value-of select="price"/></td>
    <td bgcolor="green"><xsl:value-of select="rating"/></td>
    <td bgcolor="gray"><xsl:value-of select="genre"/></td>
    <td bgcolor="gray"><xsl:value-of select="description"/></td>
  </tr>
  </xsl:if>
  </xsl:for-each>
</table>

<h2> Games : RPG</h2>
<table border="2">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Price</th>
      <th>Rating</th>
      <th>genre</th>
      <th>Description</th>
    </tr>
    <xsl:for-each select="game_store/game">
    <xsl:if test="genre= 'RPG' ">
    <tr>
      <td bgcolor="green"><xsl:value-of select="name"/></td>
      <td bgcolor="gray"><xsl:value-of select="price"/></td>
      <td bgcolor="green"><xsl:value-of select="rating"/></td>
      <td bgcolor="gray"><xsl:value-of select="genre"/></td>
      <td bgcolor="gray"><xsl:value-of select="description"/></td>
    </tr>
    </xsl:if>
    </xsl:for-each>
  </table>

<h2> Games : multiplayer</h2>
<table border="2">
  <tr bgcolor="#9acd32">
    <th>Name</th>
    <th>Price</th>
    <th>Rating</th>
    <th>genre</th>
    <th>Description</th>
  </tr>
  <xsl:for-each select="game_store/game">
  <xsl:if test="price > 100">
  <tr>
    <td bgcolor="green"><xsl:value-of select="name"/></td>
    <td bgcolor="gray"><xsl:value-of select="price"/></td>
    <td bgcolor="green"><xsl:value-of select="rating"/></td>
    <td bgcolor="gray"><xsl:value-of select="genre"/></td>
    <td bgcolor="gray"><xsl:value-of select="description"/></td>
  </tr>
  </xsl:if>
  </xsl:for-each>
</table>

  </center>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>