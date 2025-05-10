import { zodResolver } from "@hookform/resolvers/zod";
import { useCanGoBack, useRouter } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Drink } from "@/types/Drink";
// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),

  imageUrl: z.string().url({ message: "Please enter a valid URL" }).optional(),

  alcohol: z.coerce.number().min(0).max(100),

  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, { message: "Ingredient name is required" }),
        category: z.string().optional(),
        amount: z.string().optional(),
        unit: z.string().optional(),
      })
    )
    .min(1, { message: "At least one ingredient is required" }),

  instructionSteps: z.array(
    z.object({
      order: z.number().int(),
      text: z.string().min(1, { message: "Step text is required" }),
    })
  ),
});

type FormValues = z.infer<typeof formSchema>;

export function CreateDrink({ drink }: { drink?: Drink }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: drink?.name,
      description: drink?.description,
      imageUrl: drink?.imageUrl,
      ingredients: [...(drink?.ingredients || [])],
      instructionSteps: [...(drink?.instructionSteps || [])],
    },
  });

  const router = useRouter();
  const canGoBack = useCanGoBack();

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control: form.control,
    name: "ingredients",
  });

  const {} = useFieldArray({
    control: form.control,
    name: "instructionSteps",
  });

  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({
    control: form.control,
    name: "instructionSteps",
  });

  const onSubmit = (data: FormValues) => {
    // createDrinkMutation.mutate(newDrink);
    console.log("data", data);
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mojito" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="A refreshing summer cocktail..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="bg-secondary p-4 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-lg font-medium">Ingredients</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  appendIngredient({
                    name: "",
                    category: "",
                    amount: "",
                    unit: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </div>

            <div className="space-y-4">
              {ingredientFields.map((field, index) => (
                <div
                  key={field.id}
                  className="p-4 border border-border rounded-md bg-card"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">{`Ingredient ${index + 1}`}</h4>
                    {ingredientFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeIngredient(index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Rum" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.category`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Spirit" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.amount`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.unit`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="oz" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  appendIngredient({
                    name: "",
                    category: "",
                    amount: "",
                    unit: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-secondary p-4 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-lg font-medium">Instructions</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  appendStep([{ order: stepFields.length + 1, text: "" }])
                }
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Step
              </Button>
            </div>

            <div className="space-y-4">
              {stepFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-start gap-4 bg-card p-4 border border-border"
                >
                  <div className="flex-grow">
                    <FormField
                      control={form.control}
                      name={`instructionSteps.${index}.text`}
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel>Step {index + 1}</FormLabel>
                            {stepFields.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeStep(index)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            )}
                          </div>
                          <FormControl>
                            <Textarea
                              placeholder="Add ice to a glass..."
                              className="min-h-[80px] py-2"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-fit"
              onClick={() =>
                appendStep([{ order: stepFields.length + 1, text: "" }])
              }
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              onClick={() => {
                if (canGoBack) router.history.back();
                else router.navigate({ to: "/" });
              }}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
