import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../Components/Grid/GridContainer.jsx";
import GridItem from "../../Components/Grid/GridItem.jsx";
import Button from "../../Components/CustomButtons/Button.jsx";
import Card from "../../Components/Card/Card.jsx";
import CardBody from "../../Components/Card/CardBody.jsx";
import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import signupPageStyle from "../../Styles/Pages/estimatorFormStyle.jsx";

import image from "../../Styles/img/bg4.jpg";

class EstimatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1],
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>COVID-19 ESTIMATOR</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={8} md={8}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="github">
                            <i className={classes.socials + " fab fa-github"} />
                          </Button>

                          <h4 className={classes.socialTitle}>Be Healthy</h4>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            labelText="Population"
                            id="data-population"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                          <CustomInput
                            labelText="Time To Elapse"
                            id="data-time-to-elapse"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                          <CustomInput
                            labelText="Reported Cases"
                            id="first"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                          <CustomInput
                            labelText="Total Hospital Beds"
                            id="data-total-hospital-beds"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Period Type
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu,
                              }}
                              classes={{
                                select: classes.select,
                              }}
                              value={this.state.simpleSelect}
                              onChange={this.handleSimple}
                              inputProps={{
                                name: "Period Type",
                                id: "data-period-type",
                              }}
                            >
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="1"
                              >
                                Days
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="2"
                              >
                                Weeks
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="3"
                              >
                                Months
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <div className={classes.textCenter}>
                            <br />
                            <Button round color="primary" id="data-go-estimate">
                              Estimate
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(EstimatorForm);
