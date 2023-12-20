import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from 'clipboard-copy';

import styles from "@/component/CopySection/index.module.css";

const CopySection = (props) => {
  const { roomId } = props;
 
  

  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}> Your Room is ready Copy Room ID:</div>
      
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        
        <CopyToClipboard text={roomId}>
        
          <Copy  className="ml-5 bg-green-500 cursor-pointer" />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;