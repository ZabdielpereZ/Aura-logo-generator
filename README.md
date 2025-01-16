## Aura: AI Image Generator. Using OpenAI
<hr>

### Overview
<hr>

The goal of this project is to create a simple React application that allows users to enter text prompts and generate images using the DALL-E 3 API. We will set up the project, create the necessary components, manage state, handle requests and display generated images. 

Step-by-Step Guide

Prerequisites

Node.js: Ensure you have Node.js installed on your machine.

OpenAI API Key: Sign up for access to the OpenAI API and obtain your key from [OpenAI's website](https://platform.openai.com/docs/quickstart).

#### Step 1: Set Up Your React Application

Create React App:
Use **npm create vite@latest** to initialize your project.
npm create vite@latest dall-e-image-generator
cd dall-e-image-generator
npm i 
npm install openai
npm run dev 

<!-- Install Axios:
We will use Axios for making HTTP requests.
npm install axios -->

#### Step 2: Structure Your Project

Inside your `src` directory, you can organize it as follows:
src/
├── components/
│   ├── ImageGeneration.tsx     // Main component for generating images
│   └── ImageGallery        // Component for displaying generated images 
├── App.js                      // Main app component 
└── index.js                    // Entry point  

#### Step 3: Create Components

ImageGeneration.tsx

This component will handle user input and trigger the image generation.

```
import React, { useState } from 'react';
import OpenAI from 'openai';
import ImageGallery from './ImageGallery';

const ImageGeneration = () => {
  const [imageUrl, setImageUrl] = useState('');
  const openai = new OpenAI();

  const generateImage = async () => {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: 'a white siamese cat',
      n: 1,
      size: '1024x1024',
    });

    setImageUrl(response.data[0].url);
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
ImageGallery.jsx

This component displays the generated image.
```
import React from 'react';

const ImageGallery = ({ imageUrl }) => (
  <div>
    {imageUrl ? (
      <>
        {/* Displaying generated image */}
        <img src={imageUrl} alt="Generated" style={{ width: '100%', maxWidth: '500px' }} />
      </>
    ) : null}
  </div>
);

export default ImageGallery;

```
App.js

Now we can import our components into the main app file:
```
import React from 'react';
import './App.css';
import ImageGeneration from './ImageGeneration';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to the Image Generator</h1>
      <ImageGenerator />
    </header>
  </div>
);

export default App;
```
Step 4: Environment Variables

To keep your OpenAI API key secure, it's good practice to store it in environment variables:

Create a .env file at root level of your project:


REACT_APP_OPENAI_API_KEY=your_openai_api_key_here  

Modify how you access this variable in axios request:
```
headers:{
'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,   
'Content-Type': 'application/json'
}
```

<hr>

### Key Topics 
<hr>

- **Set Up the Environment:**
<br>
   - Start by installing the necessary libraries, such as OpenAI's Javascript API library. You'll need an API key from OpenAI to access their models.
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

