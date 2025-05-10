import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { Page } from "@/components/Page";
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

export const Route = createFileRoute("/drinks/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      alcohol: 0,
      ingredients: [{ name: "", category: "", amount: "", unit: "" }],
      instructionSteps: [],
    },
  });

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
    const newDrink: Drink = {
      id: uuidv4(),
      ...data,
    };

    // createDrinkMutation.mutate(newDrink);
  };

  return (
    <Page header={"Create new drink"}>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drink Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Mojito" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="alcohol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alcohol Content (%)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" max="100" {...field} />
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

            <div>
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
                      <h4 className="font-medium">{`${form.watch(`ingredients.${index}.name`) || `Ingredient ${index + 1}`}`}</h4>
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
              </div>
            </div>

            <div>
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
                  <div key={field.id} className="flex items-start gap-4">
                    <div className="flex-grow">
                      <FormField
                        control={form.control}
                        name={`instructionSteps.${index}.text`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step {index + 1}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Add ice to a glass..."
                                className="min-h-[80px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {stepFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="mt-8"
                        onClick={() => removeStep(index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </div>
    </Page>
  );
}
