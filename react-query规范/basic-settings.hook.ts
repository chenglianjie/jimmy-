import { useMutation, useQuery, useQueryClient } from '@umijs/max';
import { LIST } from './basic-settings.key';
import { basicSettingsService } from './basic-settings.service';
import { BasicSettingsDto, UpdateParamsModel } from './basic-settings.dto';

/**
 * 获取订单基础配置
 * @param  params  订单基础配置参数
 */
export const useBasicSettings = (options?: {
  onSuccess?: (data: BasicSettingsDto) => void;
}) => {
  const query = useQuery({
    queryKey: LIST,
    queryFn: async (): Promise<BasicSettingsDto> => {
      return await basicSettingsService.getConfig();
    },
    ...options,
  });
  return query;
};

export const useUpdateBasicSettings = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (params: UpdateParamsModel): Promise<void> => {
      let newParams: BasicSettingsDto = {
        ...params,
        automatic_delivery: params ? 1 : 0,
      };
      await basicSettingsService.update(newParams);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LIST,
      });
    },
  });

  return mutation;
};
