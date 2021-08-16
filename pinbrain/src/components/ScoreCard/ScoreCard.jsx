
import React from 'react';
import './scoreCard.css';


function ScoreCard(props) {

    return (
        <div className="scoreCardSection">
            <h2>{props.username}</h2>
            <table className="scoreCard" width="100">
                <tr>
                    <th colspan="2">1</th>
                    <th colspan="2">2</th>
                    <th colspan="2">3</th>
                    <th colspan="2">4</th>
                    <th colspan="2">5</th>
                    <th colspan="2">6</th>
                    <th colspan="2">7</th>
                    <th colspan="2">8</th>
                    <th colspan="2">9</th>
                    <th colspan="3">10</th>
                </tr>

                <tr className="scoreInputs">
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
                    <td>
                        <div><input type="text" /></div>
                    </td>
            
                </tr>

                <tr clssName="frametotals">
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="2">
                        <div></div>
                    </td>
                    <td colspan="3">
                        <div></div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ScoreCard;