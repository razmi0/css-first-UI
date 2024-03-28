import React from "react";

const DrawerContent = (props) => {
  return (
    <>
      <div className="drawer-container" tabIndex={0}>
        <div className="handle"></div>
        <div className="drawer">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const Drawer = (props) => {
  return (
    <div>
      <style>
        {`
            @scope {
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
                    display: flex;
                    margin: auto;
                }
            }
          `}
      </style>
      {props.children}
    </div>
  );
};

const DrawerTrigger = (props) => {
  return (
    <>
      <button id="drawer">{props.children}</button>
    </>
  );
};

export { Drawer, DrawerContent, DrawerTrigger };
