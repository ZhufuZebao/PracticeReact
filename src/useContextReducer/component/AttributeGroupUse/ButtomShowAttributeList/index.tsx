import React, {useContext} from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {Checkbox, makeStyles} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import classes from './style.module.css';
import {AttributeGroupModule} from '../../interface'
import {myContext} from "../../../../context/store";
import withShowTable from "../../../../hoc/withShowTable";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
interface ButtomShowAttributeListProps {
  changeChecked:(date:number) => void
  getCheckedNumber:()=>number
  checkedAll:()=>void
}
const ButtomShowAttributeList:React.FC<ButtomShowAttributeListProps> = ({changeChecked,getCheckedNumber,checkedAll}) => {
  const {attributeGroupList} = useContext(myContext)
  const useClasses = useStyles()
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={useClasses.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableTitle}>
              <TableCell>
                <Checkbox style={{color:'#744DFE'}}
                          onClick={() => checkedAll()}
                          checked={getCheckedNumber() === attributeGroupList.length && attributeGroupList.length !== 0}
                          indeterminate={getCheckedNumber() !== attributeGroupList.length && getCheckedNumber() !== 0}
                          disabled={attributeGroupList.length === 0}
                          inputProps={{ 'aria-label': 'all items selected' }}
                />
              </TableCell>
              <TableCell>属性组名称</TableCell>
              <TableCell>标题</TableCell>
              <TableCell>说明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attributeGroupList.map((item:AttributeGroupModule) => (
              <TableRow key={item.id} className={classes.tableRow}>
                <TableCell><Checkbox style={{color:'#744DFE'}} checked={item.check} onChange={() => {changeChecked(item.id)}}/></TableCell>
                <TableCell className={classes.textCell}>
                  <Link to={{
                    pathname:'/user/attributeGroup/information',
                  }} state={item}
                        style={{ textDecoration: "none",color:'#744DFE' }}>
                    {item.groupName}
                  </Link>
                </TableCell>
                <TableCell className={classes.textCell}>{item.type}</TableCell>
                <TableCell component="th" scope="row" className={classes.textCell}>{item.illustrate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default withShowTable(ButtomShowAttributeList)
