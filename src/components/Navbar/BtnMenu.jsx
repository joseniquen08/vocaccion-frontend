import { Box } from "@chakra-ui/react";

const BtnMenu = (props) => {
    return (
        <Box marginY="-0.5rem" marginRight="-0.5rem" display={{ md: 'none' }}>
          <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" onClick={() => {props.contentMenu()}} >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
        </Box>
    );
}

export default BtnMenu;