import {
  Overlay,
  Button,
  Loading,
  Uploader,
  Toast,
  Tabbar,
  TabbarItem,
  Col,
  Row,
  Tag,
  Progress,
  Search,
  Swipe,
  SwipeItem,
  ShareSheet,
  List,
  Form,
  Field,
  CellGroup,
  Dialog,
  Popup,
  Step,
  Steps,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Cell,
  Tab,
  Tabs,
  ActionSheet ,
  NoticeBar ,
} from "vant";

const vant = {
  install: function(Vue) {
    Vue.use(Overlay);
    Vue.use(Button);
    Vue.use(Loading);
    Vue.use(Uploader);
    Vue.use(Toast);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Tag);
    Vue.use(Progress);
    Vue.use(Search);
    Vue.use(Swipe);
    Vue.use(List);
    Vue.use(Form);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(SwipeItem);
    Vue.use(Field);
    Vue.use(CellGroup);
    Vue.use(Dialog);
    Vue.use(ShareSheet);
    Vue.use(Popup);
    Vue.use(Step);
    Vue.use(Steps);
    Vue.use(Switch);
    Vue.use(Checkbox);
    Vue.use(CheckboxGroup);
    Vue.use(Cell);
    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(ActionSheet );
    Vue.use(NoticeBar );

  }
};

export default vant;
