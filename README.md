# Aura: AI Image Generator. Using OpenAI

## Overview

The goal of this project is to create a simple React application that allows users to enter text prompts and generate images using the DALL-E 3 API. We will set up the project, create the necessary components, manage state, handle requests and display generated images. 

---

## Table of Contents
- [Aura: AI Image Generator. Using OpenAI](#aura-ai-image-generator-using-openai)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Step-by-Step Guide](#step-by-step-guide)
      - [Prerequisites](#prerequisites)
      - [Step 1: Set Up Your React Application](#step-1-set-up-your-react-application)
      - [Step 2: Structure Your Project](#step-2-structure-your-project)
      - [Step 3: Create Components](#step-3-create-components)
      - [Step 4: Environment Variables](#step-4-environment-variables)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Key Topics](#key-topics)
  - [Contributing](#contributing)
  - [GitHub Links](#github-links)

---

## Step-by-Step Guide

#### Prerequisites

Node.js: Ensure you have Node.js installed on your machine.

OpenAI API Key: Sign up for access to the OpenAI API and obtain your key from [OpenAI's website](https://platform.openai.com/docs/quickstart).

#### Step 1: Set Up Your React Application

Create React App:
```
npm create vite@latest to initialize your project.
npm create vite@latest dall-e-image-generator
cd dall-e-image-generator
```

install dependencies:
```
npm i 
npm install openai
npm run dev 
```

<!-- Install Axios:
We will use Axios for making HTTP requests.
npm install axios -->

#### Step 2: Structure Your Project

Inside your `src` directory, you can organize it as follows:
```
src/
├── components/
│   ├── ImageGeneration.tsx     // Main component for generating images
│   └── ImageGallery.tsx        // Component for displaying generated images 
├── App.tsx                      // Main app component 
└── index.tsx                    // Entry point
```

#### Step 3: Create Components

ImageGeneration.tsx

This component will handle user input and trigger the image generation.

```
import React, { useState } from 'react';
import OpenAI from 'openai';
import ImageGallery from './ImageGallery';

const ImageGeneration: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const openai = new OpenAI();

  const generateImage = async () => {
    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: 'a white siamese cat',
        n: 1,
        size: '1024x1024',
      });

      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div>
      <h1>Generated Image</h1>
      <button onClick={generateImage}>Generate Image</button>
      <ImageGallery imageUrl={imageUrl} />
    </div>
  );
};

export default ImageGeneration;

```
ImageGallery.tsx

This component displays the generated image.
```
import React from 'react';

interface ImageGalleryProps {
  imageUrl?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrl }) => (
  <div>
    {imageUrl ? (
      <>
        <img src={imageUrl} alt="Generated" style={{ width: '100%', maxWidth: '500px' }} />
      </>
    ) : null}
  </div>
);

export default ImageGallery;


```
App.tsx

Now we can import our components into the main app file:
```
import React from 'react';
import './App.css';
import ImageGeneration from './ImageGeneration';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to the Image Generator</h1>
      <ImageGeneration />
    </header>
  </div>
);

export default App;
```
#### Step 4: Environment Variables

To keep your OpenAI API key secure, it's good practice to store it in environment variables:

Create a `.env` file at root level of your project for the OpenAI API key and Auth0 credentials:


VITE_OPENAI_API_KEY=your_openai_api_key_here  

 ```env
   VITE_OPENAI_API_KEY=your-openai-api-key
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_CLIENT_ID=your-auth0-client-id
   AUTH0_CLIENT_SECRET=your-auth0-client-secret
   ```

---
## Features
- **Image Generation**: Generate high-quality AI-assisted images using DALL·E 3 with openai API.
- **User Authentication**: Secure user authentication using Auth0. and Authentication guard for routing security.
- **Image Management**: Save and manage generated images in local storage with TypeScrip code.
- **Responsive Design**: Built with Tailwind CSS for a sleek and modern UI.
- **Routing**: Dynamic and efficient navigation using react-router-dom.

---

## Tech Stack
- **Frontend**: [TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [Tailwind](https://tailwindcss.com/docs/installation/using-vite), [Flowbite](https://flowbite.com/docs/getting-started/introduction/), [Npmjs](https://www.npmjs.com/package/react-router-dom?activeTab=readme), [Auth0](https://auth0.com/docs/quickstart/spa/react), [Vercel](https://vercel.com/docs), [OpenAI](https://platform.openai.com/docs/guides/images?lang=javascript) 

---

## Key Topics 

Set Up the Environment:
<br>
   - Start by installing the necessary libraries, such as OpenAI's API Javascript library. You'll need an API key from OpenAI to access their models.
<br>
- **Authenticate:** 
<br>
  - Use your API key to authenticate your application with OpenAI’s API.
<br>
- **Design the Prompt:** 
<br>
  - Create a detailed and clear text prompt that describes the image you want to generate.
<br>
- **API Call:**
<br> 
  - Send a request to OpenAI's API with your prompt. Depending on the model you're using (DALL-E 3), you'll receive a generated image.
<br>
- **Process the Response:**
<br>
  - Extract the image data from the API response and save image then display image.
<br>
- **Fine-Tuning:**
<br> 
  - Experiment with different prompts and parameters to refine the quality and relevance of the generated images.

---

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## GitHub Links
- [Frontend Repository](https://github.com/ZabdielpereZ/Aura-logo-generator)
- [Backend Repository](https://github.com/kareemrogers-coder/aura_project_backend)

