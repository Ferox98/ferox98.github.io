---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Downloading CV…</title>
</head>
<body>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fileUrl = '{{ "/assets/files/Belet_CV.pdf" | relative_url }}';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Belet_CV.pdf';   // suggest a filename
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Optional: navigate away after triggering download
    // window.location.href = '{{ "/" | relative_url }}';
  });
</script>

<noscript>
  <p>JavaScript is required to download automatically.<br>
     <a href="{{ "/files/kaleab_cv.pdf" | relative_url }}">Download manually</a>
  </p>
</noscript>
</body>
</html>