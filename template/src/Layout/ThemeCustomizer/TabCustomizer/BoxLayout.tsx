import { Box } from '@/Constant'
import CommonUL from './CommonUL'
import { LtrDataType } from '@/Types/ThemeCustomizerTypes'
import { Badge } from 'reactstrap'

const BoxLayout :React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`${layout_type === "box-layout" ? "active" : ""}`} data-attr="box" onClick={() => handleLayout("box-layout")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-light sidebar"></li>
          <li className="bg-light body">
            <Badge color="primary">{Box}</Badge>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default BoxLayout