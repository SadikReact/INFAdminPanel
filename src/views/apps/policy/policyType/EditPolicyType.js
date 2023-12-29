import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
// import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class EditAboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policyType: "",
      policyDescription: "",
      editorState: EditorState.createEmpty(),
    };
  }
  componentDidMount() {
    const { pt_type, pt_type_desc } = this.props.location.state;
    console.log(this.props.location.state.pt_type);
    this.setState({ policyType: pt_type });
    this.setState({ policyDescription: pt_type_desc });
    console.log(this.props.location.state.pt_type_desc);
    // let { id } = this.props.match.params;
    // axiosConfig
    //   .get(`/admin/getone_aboutus/${id}`)
    //   .then((response) => {
    //     console.log(response.data.data.desc);
    //     this.setState({
    //       desc: response.data.data.desc,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      policyDescription: draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      ),
    });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      pt_type: this.state.policyType,
      pt_type_desc: this.state.policyDescription,
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_pt/${id}`, payload)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/policy/PolicyTypeList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit PolicyType</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              {/* <span>{ReactHtmlParser(params.data.desc)}</span> */}
              <h1 col-sm-6 className="float-left">
                Edit PolicyType
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/policy/PolicyTypeList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>PolcyType </Label>
                  <Input
                    type="text"
                    name="policyType"
                    placeholder="PolicyType"
                    value={this.state.policyType}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Descripition</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update PolicyType
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
