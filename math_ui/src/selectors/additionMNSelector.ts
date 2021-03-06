import { ApplicationState } from "../reducers";
import { RangeTemplateState } from "../reducers/types";

export const selectAdditionMNData = (
  state: ApplicationState
): RangeTemplateState => state.additionMNData;

export const selectDisableCreateBtn = (state: ApplicationState): boolean => {
  const { isFromValueError, isToValueError } = selectAdditionMNData(state);

  return isFromValueError || isToValueError;
};

export default { selectAdditionMNData, selectDisableCreateBtn };
