const DrawerPureCss = () => {
  const root = document.querySelector("body")!;
  root.innerHTML += `
    <style>
    .drawer-container {
        position: fixed;
        overflow: hidden;
        width: 100%;
        bottom: 0;
        transform: translate3d(0, 100%, 0);
        transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
        border-radius: 0.75em;
        background-color: var(--bg-2);
      }
      
      .drawer {
        height: 450px;
        display: flex;
        place-items: center;
        place-content: center;
      }
      
      #drawer:focus ~ .drawer-container {
        transform: translate3d(0, 0%, 0);
        transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
      }
      
      .drawer-container:focus {
        transform: none;
      }
      
      .handle {
        background-color: rgba(63, 62, 62, 0.774);
        height: 0.5rem;
        width: 100px;
        margin: auto;
        margin-top: 1rem;
        border-radius: 9999px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
      }
      
      .drawer > .content {
        width: 25%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: auto;
        & > h3 {
          font-size: 4rem;
          text-align: start;
          color: var(--font-1);
          border-bottom: 1px solid var(--font-1);
        }
        & > p {
          font-size: 0.95rem;
          text-align: start;
        }
        & > small {
          font-size: 0.85rem;
          text-align: end;
          color: var(--font-2);
        }
      }
    </style>
    <button id="drawer" class="outline card">Open drawer</button>
    <div class="drawer-container card" tabindex="0">
        <div class="handle"></div>
        <div class="drawer">
            <div class="content">
                <h3>The title</h3>
                <p>Subtitle</p>
                <p>The description...</p>
                <small>Some content</small>
            </div>
        </div>
    </div>
    `;
};
