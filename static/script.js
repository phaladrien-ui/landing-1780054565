<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
  <title>LUXE CONNECTÉ · Montre Élégance</title>
  <!-- Google Fonts (minimal) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <!-- Font Awesome 6 (gratuit) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: #f7f6f3;
      color: #1e1e1e;
      line-height: 1.5;
      overflow-x: hidden;
    }

    /* NAVBAR */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 5%;
      background: transparent;
      transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
      z-index: 1000;
    }

    .navbar.solid {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      padding: 0.8rem 5%;
    }

    .logo {
      font-weight: 700;
      font-size: 1.8rem;
      letter-spacing: -0.5px;
      color: #1e1e1e;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .logo i {
      color: #b7935a;
      font-size: 1.6rem;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      align-items: center;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: #1e1e1e;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.2s;
      letter-spacing: 0.3px;
    }

    .nav-links a:hover {
      color: #b7935a;
    }

    .nav-cta {
      background: #1e1e1e;
      color: #fff !important;
      padding: 0.5rem 1.4rem;
      border-radius: 40px;
      font-weight: 600;
      transition: background 0.2s;
    }

    .nav-cta:hover {
      background: #b7935a;
      color: #fff !important;
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
      background: transparent;
      border: none;
      padding: 4px;
    }

    .hamburger span {
      width: 28px;
      height: 2.5px;
      background: #1e1e1e;
      border-radius: 4px;
      transition: 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8rem 5% 6rem;
      background: linear-gradient(145deg, #eae7e0 0%, #d6d1c7 100%);
      position: relative;
      overflow: hidden;
      will-change: transform;
    }

    .hero-bg-parallax {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
                  url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" opacity="0.08"><circle cx="400" cy="400" r="350" fill="none" stroke="%231e1e1e" stroke-width="0.5"/><circle cx="400" cy="400" r="250" fill="none" stroke="%231e1e1e" stroke-width="0.3"/><circle cx="400" cy="400" r="150" fill="none" stroke="%231e1e1e" stroke-width="0.2"/></svg>');
      background-size: cover, 800px 800px;
      background-position: center;
      will-change: transform;
      pointer-events: none;
      z-index: 0;
    }

    .hero-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1300px;
      position: relative;
      z-index: 2;
      gap: 2rem;
    }

    .hero-text {
      flex: 1 1 380px;
    }

    .hero-text .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(4px);
      padding: 0.3rem 1.2rem;
      border-radius: 40px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: #3d3529;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .hero-text h1 {
      font-size: 3.8rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
      color: #1e1e1e;
    }

    .hero-text h1 span {
      color: #b7935a;
    }

    .hero-text p {
      font-size: 1.2rem;
      color: #3d3d3d;
      max-width: 500px;
      margin-bottom: 2.5rem;
      font-weight: 300;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: #1e1e1e;
      color: white;
      border: none;
      padding: 1rem 2.8rem;
      border-radius: 60px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.2s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .btn-primary i {
      font-size: 1rem;
    }

    .btn-primary:hover {
      background: #b7935a;
      transform: scale(1.02);
    }

    .btn-outline {
      background: transparent;
      border: 1.5px solid #1e1e1e;
      color: #1e1e1e;
      padding: 1rem 2.8rem;
      border-radius: 60px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.2s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .btn-out