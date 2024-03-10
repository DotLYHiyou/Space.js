// Space.js Code

// Define the main framework object
const Space = (() => {
  // Function to create a new component
  const createComponent = (name, renderFunction) => {
    return {
      name,
      render: renderFunction
    };
  };

  // Function to render a component to the DOM
// Function to render a component to the DOM
const renderComponent = (component, containerId) => {
  console.log('Rendering component:', component.name); // Add this line
  const container = document.getElementById(containerId);
  if (container) {
    console.log('Container found:', containerId); // And this line
    container.innerHTML = component.render();
  } else {
    console.log('Container not found:', containerId); // And this line
  }
};

  // Expose the public API
  return {
    createComponent,
    renderComponent
  };
})();

// Usage of MiniFramework
// Create a new component
const HiBasic = Space.createComponent('HiBasic', () => {
  return `<div>Hello, Space.js!</div>`;
});

// Render the component to the DOM
Space.renderComponent(HiBasic, 'app-container');
